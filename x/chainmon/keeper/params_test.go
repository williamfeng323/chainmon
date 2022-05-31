package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "github.com/williamfeng323/chainmon/testutil/keeper"
	"github.com/williamfeng323/chainmon/x/chainmon/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.ChainmonKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
