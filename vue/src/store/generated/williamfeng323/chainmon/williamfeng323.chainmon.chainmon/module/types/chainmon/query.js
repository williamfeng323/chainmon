/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
import { Chainmon } from '../chainmon/chainmon';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
export const protobufPackage = 'williamfeng323.chainmon.chainmon';
const baseQueryGetChainmonRequest = { id: 0 };
export const QueryGetChainmonRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetChainmonRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetChainmonRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetChainmonRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetChainmonResponse = {};
export const QueryGetChainmonResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Chainmon !== undefined) {
            Chainmon.encode(message.Chainmon, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetChainmonResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Chainmon = Chainmon.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetChainmonResponse };
        if (object.Chainmon !== undefined && object.Chainmon !== null) {
            message.Chainmon = Chainmon.fromJSON(object.Chainmon);
        }
        else {
            message.Chainmon = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Chainmon !== undefined && (obj.Chainmon = message.Chainmon ? Chainmon.toJSON(message.Chainmon) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetChainmonResponse };
        if (object.Chainmon !== undefined && object.Chainmon !== null) {
            message.Chainmon = Chainmon.fromPartial(object.Chainmon);
        }
        else {
            message.Chainmon = undefined;
        }
        return message;
    }
};
const baseQueryAllChainmonRequest = {};
export const QueryAllChainmonRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllChainmonRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllChainmonRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllChainmonRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllChainmonResponse = {};
export const QueryAllChainmonResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Chainmon) {
            Chainmon.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllChainmonResponse };
        message.Chainmon = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Chainmon.push(Chainmon.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllChainmonResponse };
        message.Chainmon = [];
        if (object.Chainmon !== undefined && object.Chainmon !== null) {
            for (const e of object.Chainmon) {
                message.Chainmon.push(Chainmon.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Chainmon) {
            obj.Chainmon = message.Chainmon.map((e) => (e ? Chainmon.toJSON(e) : undefined));
        }
        else {
            obj.Chainmon = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllChainmonResponse };
        message.Chainmon = [];
        if (object.Chainmon !== undefined && object.Chainmon !== null) {
            for (const e of object.Chainmon) {
                message.Chainmon.push(Chainmon.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Chainmon(request) {
        const data = QueryGetChainmonRequest.encode(request).finish();
        const promise = this.rpc.request('williamfeng323.chainmon.chainmon.Query', 'Chainmon', data);
        return promise.then((data) => QueryGetChainmonResponse.decode(new Reader(data)));
    }
    ChainmonAll(request) {
        const data = QueryAllChainmonRequest.encode(request).finish();
        const promise = this.rpc.request('williamfeng323.chainmon.chainmon.Query', 'ChainmonAll', data);
        return promise.then((data) => QueryAllChainmonResponse.decode(new Reader(data)));
    }
}
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
