package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/williamfeng323/chainmon/testutil/keeper"
	"github.com/williamfeng323/chainmon/x/chainmon/keeper"
	"github.com/williamfeng323/chainmon/x/chainmon/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.ChainmonKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
