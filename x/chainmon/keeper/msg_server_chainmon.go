package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/williamfeng323/chainmon/x/chainmon/types"
)

func (k msgServer) CreateChainmon(goCtx context.Context, msg *types.MsgCreateChainmon) (*types.MsgCreateChainmonResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var chainmon = types.Chainmon{
		Creator:    msg.Creator,
		Name:       msg.Name,
		MonClass:   msg.MonClass,
		Phase:      msg.Phase,
		Species:    msg.Species,
		Databricks: msg.Databricks,
	}

	id := k.AppendChainmon(
		ctx,
		chainmon,
	)

	return &types.MsgCreateChainmonResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateChainmon(goCtx context.Context, msg *types.MsgUpdateChainmon) (*types.MsgUpdateChainmonResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var chainmon = types.Chainmon{
		Creator:    msg.Creator,
		Id:         msg.Id,
		Name:       msg.Name,
		MonClass:   msg.MonClass,
		Phase:      msg.Phase,
		Species:    msg.Species,
		Databricks: msg.Databricks,
	}

	// Checks that the element exists
	if !k.HasChainmon(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetChainmonOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetChainmon(ctx, chainmon)

	return &types.MsgUpdateChainmonResponse{}, nil
}

func (k msgServer) DeleteChainmon(goCtx context.Context, msg *types.MsgDeleteChainmon) (*types.MsgDeleteChainmonResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasChainmon(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetChainmonOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveChainmon(ctx, msg.Id)

	return &types.MsgDeleteChainmonResponse{}, nil
}
