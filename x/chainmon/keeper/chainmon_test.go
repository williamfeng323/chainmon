package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"
	"github.com/williamfeng323/chainmon/x/chainmon/types"
)

func createNChainmon(keeper *Keeper, ctx sdk.Context, n int) []types.Chainmon {
	items := make([]types.Chainmon, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendChainmon(ctx, items[i])
	}
	return items
}

func TestChainmonGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNChainmon(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetChainmon(ctx, item.Id))
	}
}

func TestChainmonExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNChainmon(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasChainmon(ctx, item.Id))
	}
}

func TestChainmonRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNChainmon(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveChainmon(ctx, item.Id)
		assert.False(t, keeper.HasChainmon(ctx, item.Id))
	}
}

func TestChainmonGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNChainmon(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllChainmon(ctx))
}

func TestChainmonCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNChainmon(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetChainmonCount(ctx))
}
