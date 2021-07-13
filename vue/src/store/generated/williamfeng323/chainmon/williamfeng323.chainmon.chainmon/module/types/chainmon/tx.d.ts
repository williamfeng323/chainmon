import { MonClass, Phase } from '../chainmon/chainmon';
import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "williamfeng323.chainmon.chainmon";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateChainmon {
    creator: string;
    name: string;
    monClass: MonClass;
    phase: Phase;
    species: number;
    databricks: number;
}
export interface MsgCreateChainmonResponse {
    id: number;
}
export interface MsgUpdateChainmon {
    creator: string;
    id: number;
    name: string;
    monClass: MonClass;
    phase: Phase;
    species: number;
    databricks: number;
}
export interface MsgUpdateChainmonResponse {
}
export interface MsgDeleteChainmon {
    creator: string;
    id: number;
}
export interface MsgDeleteChainmonResponse {
}
export declare const MsgCreateChainmon: {
    encode(message: MsgCreateChainmon, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateChainmon;
    fromJSON(object: any): MsgCreateChainmon;
    toJSON(message: MsgCreateChainmon): unknown;
    fromPartial(object: DeepPartial<MsgCreateChainmon>): MsgCreateChainmon;
};
export declare const MsgCreateChainmonResponse: {
    encode(message: MsgCreateChainmonResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateChainmonResponse;
    fromJSON(object: any): MsgCreateChainmonResponse;
    toJSON(message: MsgCreateChainmonResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateChainmonResponse>): MsgCreateChainmonResponse;
};
export declare const MsgUpdateChainmon: {
    encode(message: MsgUpdateChainmon, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateChainmon;
    fromJSON(object: any): MsgUpdateChainmon;
    toJSON(message: MsgUpdateChainmon): unknown;
    fromPartial(object: DeepPartial<MsgUpdateChainmon>): MsgUpdateChainmon;
};
export declare const MsgUpdateChainmonResponse: {
    encode(_: MsgUpdateChainmonResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateChainmonResponse;
    fromJSON(_: any): MsgUpdateChainmonResponse;
    toJSON(_: MsgUpdateChainmonResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateChainmonResponse>): MsgUpdateChainmonResponse;
};
export declare const MsgDeleteChainmon: {
    encode(message: MsgDeleteChainmon, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteChainmon;
    fromJSON(object: any): MsgDeleteChainmon;
    toJSON(message: MsgDeleteChainmon): unknown;
    fromPartial(object: DeepPartial<MsgDeleteChainmon>): MsgDeleteChainmon;
};
export declare const MsgDeleteChainmonResponse: {
    encode(_: MsgDeleteChainmonResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteChainmonResponse;
    fromJSON(_: any): MsgDeleteChainmonResponse;
    toJSON(_: MsgDeleteChainmonResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteChainmonResponse>): MsgDeleteChainmonResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateChainmon(request: MsgCreateChainmon): Promise<MsgCreateChainmonResponse>;
    UpdateChainmon(request: MsgUpdateChainmon): Promise<MsgUpdateChainmonResponse>;
    DeleteChainmon(request: MsgDeleteChainmon): Promise<MsgDeleteChainmonResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateChainmon(request: MsgCreateChainmon): Promise<MsgCreateChainmonResponse>;
    UpdateChainmon(request: MsgUpdateChainmon): Promise<MsgUpdateChainmonResponse>;
    DeleteChainmon(request: MsgDeleteChainmon): Promise<MsgDeleteChainmonResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
