import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "williamfeng323.chainmon.chainmon";
export declare enum MonClass {
    BEAST = 0,
    INSET = 1,
    AQUATIC = 2,
    PLANT = 3,
    METAL = 4,
    DRAGON = 5,
    UNRECOGNIZED = -1
}
export declare function monClassFromJSON(object: any): MonClass;
export declare function monClassToJSON(object: MonClass): string;
export declare enum Phase {
    BIT = 0,
    BYTE = 1,
    KILOBYTE = 2,
    MEGABYTE = 3,
    GIGABYTE = 4,
    TERABYTE = 5,
    UNRECOGNIZED = -1
}
export declare function phaseFromJSON(object: any): Phase;
export declare function phaseToJSON(object: Phase): string;
export interface Chainmon {
    creator: string;
    id: number;
    name: string;
    monClass: MonClass;
    phase: Phase;
    species: number;
    databricks: number;
}
export declare const Chainmon: {
    encode(message: Chainmon, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Chainmon;
    fromJSON(object: any): Chainmon;
    toJSON(message: Chainmon): unknown;
    fromPartial(object: DeepPartial<Chainmon>): Chainmon;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
