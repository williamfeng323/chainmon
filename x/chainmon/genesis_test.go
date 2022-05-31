package chainmon_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "github.com/williamfeng323/chainmon/testutil/keeper"
	"github.com/williamfeng323/chainmon/testutil/nullify"
	"github.com/williamfeng323/chainmon/x/chainmon"
	"github.com/williamfeng323/chainmon/x/chainmon/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.ChainmonKeeper(t)
	chainmon.InitGenesis(ctx, *k, genesisState)
	got := chainmon.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
