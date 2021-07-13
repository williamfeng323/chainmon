package cli

import (
	"fmt"
	"strconv"

	"github.com/spf13/cobra"

	"github.com/spf13/cast"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/williamfeng323/chainmon/x/chainmon/types"
)

func CmdCreateChainmon() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-chainmon [name] [monClass] [phase] [species] [databricks]",
		Short: "Create a new chainmon",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsName, err := cast.ToStringE(args[0])
			if err != nil {
				return err
			}

			argsMonClassStr, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}
			argsMonClass, ok := types.MonClass_value[argsMonClassStr]
			if !ok {
				return fmt.Errorf("invalid monster class %s", args[1])
			}

			argsPhaseStr, err := cast.ToStringE(args[2])
			if err != nil {
				return err
			}
			argsPhase, ok := types.Phase_value[argsPhaseStr]
			if !ok {
				return fmt.Errorf("invalid monster phase: %s", args[2])
			}

			argsSpecies, err := cast.ToUint64E(args[3])
			if err != nil {
				return err
			}

			argsDatabricks, err := cast.ToInt64E(args[4])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateChainmon(clientCtx.GetFromAddress().String(), argsName,
				types.MonClass(argsMonClass), types.Phase(argsPhase), argsSpecies, argsDatabricks)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateChainmon() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-chainmon [id] [name] [monClass] [phase] [species] [databricks]",
		Short: "Update a chainmon",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsName, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}

			argsMonClassStr, err := cast.ToStringE(args[2])
			if err != nil {
				return err
			}
			argsMonClass, ok := types.MonClass_value[argsMonClassStr]
			if !ok {
				return fmt.Errorf("monster class %s not found", args[2])
			}

			argsPhaseStr, err := cast.ToStringE(args[3])
			if err != nil {
				return err
			}
			argsPhase, ok := types.Phase_value[argsPhaseStr]
			if !ok {
				return fmt.Errorf("invalid monster phase %s", args[3])
			}

			argsSpecies, err := cast.ToUint64E(args[4])
			if err != nil {
				return err
			}

			argsDatabricks, err := cast.ToInt64E(args[5])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateChainmon(clientCtx.GetFromAddress().String(), id, argsName, types.MonClass(argsMonClass),
				types.Phase(argsPhase), argsSpecies, argsDatabricks)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteChainmon() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-chainmon [id]",
		Short: "Delete a chainmon by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteChainmon(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
