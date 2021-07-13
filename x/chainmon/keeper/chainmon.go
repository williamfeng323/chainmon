package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/williamfeng323/chainmon/x/chainmon/types"
	"strconv"
)

// GetChainmonCount get the total number of chainmon
func (k Keeper) GetChainmonCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ChainmonCountKey))
	byteKey := types.KeyPrefix(types.ChainmonCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to iint64
		panic("cannot decode count")
	}

	return count
}

// SetChainmonCount set the total number of chainmon
func (k Keeper) SetChainmonCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ChainmonCountKey))
	byteKey := types.KeyPrefix(types.ChainmonCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendChainmon appends a chainmon in the store with a new id and update the count
func (k Keeper) AppendChainmon(
	ctx sdk.Context,
	chainmon types.Chainmon,
) uint64 {
	// Create the chainmon
	count := k.GetChainmonCount(ctx)

	// Set the ID of the appended value
	chainmon.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ChainmonKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&chainmon)
	store.Set(GetChainmonIDBytes(chainmon.Id), appendedValue)

	// Update chainmon count
	k.SetChainmonCount(ctx, count+1)

	return count
}

// SetChainmon set a specific chainmon in the store
func (k Keeper) SetChainmon(ctx sdk.Context, chainmon types.Chainmon) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ChainmonKey))
	b := k.cdc.MustMarshalBinaryBare(&chainmon)
	store.Set(GetChainmonIDBytes(chainmon.Id), b)
}

// GetChainmon returns a chainmon from its id
func (k Keeper) GetChainmon(ctx sdk.Context, id uint64) types.Chainmon {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ChainmonKey))
	var chainmon types.Chainmon
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetChainmonIDBytes(id)), &chainmon)
	return chainmon
}

// HasChainmon checks if the chainmon exists in the store
func (k Keeper) HasChainmon(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ChainmonKey))
	return store.Has(GetChainmonIDBytes(id))
}

// GetChainmonOwner returns the creator of the chainmon
func (k Keeper) GetChainmonOwner(ctx sdk.Context, id uint64) string {
	return k.GetChainmon(ctx, id).Creator
}

// RemoveChainmon removes a chainmon from the store
func (k Keeper) RemoveChainmon(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ChainmonKey))
	store.Delete(GetChainmonIDBytes(id))
}

// GetAllChainmon returns all chainmon
func (k Keeper) GetAllChainmon(ctx sdk.Context) (list []types.Chainmon) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ChainmonKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Chainmon
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetChainmonIDBytes returns the byte representation of the ID
func GetChainmonIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetChainmonIDFromBytes returns ID in uint64 format from a byte array
func GetChainmonIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
