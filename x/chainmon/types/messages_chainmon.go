package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateChainmon{}

func NewMsgCreateChainmon(creator string, name string, monClass MonClass, phase Phase, species uint64, databricks int64) *MsgCreateChainmon {
	return &MsgCreateChainmon{
		Creator:    creator,
		Name:       name,
		MonClass:   monClass,
		Phase:      phase,
		Species:    species,
		Databricks: databricks,
	}
}

func (msg *MsgCreateChainmon) Route() string {
	return RouterKey
}

func (msg *MsgCreateChainmon) Type() string {
	return "CreateChainmon"
}

func (msg *MsgCreateChainmon) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateChainmon) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateChainmon) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateChainmon{}

func NewMsgUpdateChainmon(creator string, id uint64, name string, monClass MonClass, phase Phase, species uint64, databricks int64) *MsgUpdateChainmon {
	return &MsgUpdateChainmon{
		Id:         id,
		Creator:    creator,
		Name:       name,
		MonClass:   monClass,
		Phase:      phase,
		Species:    species,
		Databricks: databricks,
	}
}

func (msg *MsgUpdateChainmon) Route() string {
	return RouterKey
}

func (msg *MsgUpdateChainmon) Type() string {
	return "UpdateChainmon"
}

func (msg *MsgUpdateChainmon) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateChainmon) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateChainmon) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteChainmon{}

func NewMsgDeleteChainmon(creator string, id uint64) *MsgDeleteChainmon {
	return &MsgDeleteChainmon{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteChainmon) Route() string {
	return RouterKey
}

func (msg *MsgDeleteChainmon) Type() string {
	return "DeleteChainmon"
}

func (msg *MsgDeleteChainmon) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteChainmon) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteChainmon) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
