/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import { Chainmon } from '../chainmon/chainmon';
export const protobufPackage = 'williamfeng323.chainmon.chainmon';
const baseGenesisState = { chainmonCount: 0 };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.chainmonList) {
            Chainmon.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.chainmonCount !== 0) {
            writer.uint32(16).uint64(message.chainmonCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.chainmonList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainmonList.push(Chainmon.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.chainmonCount = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.chainmonList = [];
        if (object.chainmonList !== undefined && object.chainmonList !== null) {
            for (const e of object.chainmonList) {
                message.chainmonList.push(Chainmon.fromJSON(e));
            }
        }
        if (object.chainmonCount !== undefined && object.chainmonCount !== null) {
            message.chainmonCount = Number(object.chainmonCount);
        }
        else {
            message.chainmonCount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.chainmonList) {
            obj.chainmonList = message.chainmonList.map((e) => (e ? Chainmon.toJSON(e) : undefined));
        }
        else {
            obj.chainmonList = [];
        }
        message.chainmonCount !== undefined && (obj.chainmonCount = message.chainmonCount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.chainmonList = [];
        if (object.chainmonList !== undefined && object.chainmonList !== null) {
            for (const e of object.chainmonList) {
                message.chainmonList.push(Chainmon.fromPartial(e));
            }
        }
        if (object.chainmonCount !== undefined && object.chainmonCount !== null) {
            message.chainmonCount = object.chainmonCount;
        }
        else {
            message.chainmonCount = 0;
        }
        return message;
    }
};
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
