package keeper

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/williamfeng323/chainmon/x/chainmon/types"
)

func TestChainmonMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateChainmon(ctx, &types.MsgCreateChainmon{Creator: creator})
		require.NoError(t, err)
		assert.Equal(t, i, int(resp.Id))
	}
}

func TestChainmonMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateChainmon
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateChainmon{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateChainmon{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateChainmon{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateChainmon(ctx, &types.MsgCreateChainmon{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateChainmon(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestChainmonMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteChainmon
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteChainmon{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteChainmon{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteChainmon{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateChainmon(ctx, &types.MsgCreateChainmon{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteChainmon(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
