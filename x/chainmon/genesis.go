package chainmon

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/williamfeng323/chainmon/x/chainmon/keeper"
	"github.com/williamfeng323/chainmon/x/chainmon/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the chainmon
	for _, elem := range genState.ChainmonList {
		k.SetChainmon(ctx, *elem)
	}

	// Set chainmon count
	k.SetChainmonCount(ctx, genState.ChainmonCount)

	// this line is used by starport scaffolding # ibc/genesis/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all chainmon
	chainmonList := k.GetAllChainmon(ctx)
	for _, elem := range chainmonList {
		elem := elem
		genesis.ChainmonList = append(genesis.ChainmonList, &elem)
	}

	// Set the current count
	genesis.ChainmonCount = k.GetChainmonCount(ctx)

	// this line is used by starport scaffolding # ibc/genesis/export

	return genesis
}
