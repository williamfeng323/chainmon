package keeper

import (
	"github.com/williamfeng323/chainmon/x/chainmon/types"
)

var _ types.QueryServer = Keeper{}
