import { Reader, Writer } from 'protobufjs/minimal';
import { Chainmon } from '../chainmon/chainmon';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
export declare const protobufPackage = "williamfeng323.chainmon.chainmon";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetChainmonRequest {
    id: number;
}
export interface QueryGetChainmonResponse {
    Chainmon: Chainmon | undefined;
}
export interface QueryAllChainmonRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllChainmonResponse {
    Chainmon: Chainmon[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetChainmonRequest: {
    encode(message: QueryGetChainmonRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetChainmonRequest;
    fromJSON(object: any): QueryGetChainmonRequest;
    toJSON(message: QueryGetChainmonRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetChainmonRequest>): QueryGetChainmonRequest;
};
export declare const QueryGetChainmonResponse: {
    encode(message: QueryGetChainmonResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetChainmonResponse;
    fromJSON(object: any): QueryGetChainmonResponse;
    toJSON(message: QueryGetChainmonResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetChainmonResponse>): QueryGetChainmonResponse;
};
export declare const QueryAllChainmonRequest: {
    encode(message: QueryAllChainmonRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllChainmonRequest;
    fromJSON(object: any): QueryAllChainmonRequest;
    toJSON(message: QueryAllChainmonRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllChainmonRequest>): QueryAllChainmonRequest;
};
export declare const QueryAllChainmonResponse: {
    encode(message: QueryAllChainmonResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllChainmonResponse;
    fromJSON(object: any): QueryAllChainmonResponse;
    toJSON(message: QueryAllChainmonResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllChainmonResponse>): QueryAllChainmonResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a chainmon by id. */
    Chainmon(request: QueryGetChainmonRequest): Promise<QueryGetChainmonResponse>;
    /** Queries a list of chainmon items. */
    ChainmonAll(request: QueryAllChainmonRequest): Promise<QueryAllChainmonResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Chainmon(request: QueryGetChainmonRequest): Promise<QueryGetChainmonResponse>;
    ChainmonAll(request: QueryAllChainmonRequest): Promise<QueryAllChainmonResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
