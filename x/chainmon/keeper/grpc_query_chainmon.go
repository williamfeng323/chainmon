package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/williamfeng323/chainmon/x/chainmon/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ChainmonAll(c context.Context, req *types.QueryAllChainmonRequest) (*types.QueryAllChainmonResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var chainmons []*types.Chainmon
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	chainmonStore := prefix.NewStore(store, types.KeyPrefix(types.ChainmonKey))

	pageRes, err := query.Paginate(chainmonStore, req.Pagination, func(key []byte, value []byte) error {
		var chainmon types.Chainmon
		if err := k.cdc.UnmarshalBinaryBare(value, &chainmon); err != nil {
			return err
		}

		chainmons = append(chainmons, &chainmon)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllChainmonResponse{Chainmon: chainmons, Pagination: pageRes}, nil
}

func (k Keeper) Chainmon(c context.Context, req *types.QueryGetChainmonRequest) (*types.QueryGetChainmonResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var chainmon types.Chainmon
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasChainmon(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ChainmonKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetChainmonIDBytes(req.Id)), &chainmon)

	return &types.QueryGetChainmonResponse{Chainmon: &chainmon}, nil
}
