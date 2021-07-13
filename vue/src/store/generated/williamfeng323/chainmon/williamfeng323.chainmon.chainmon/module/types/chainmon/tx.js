/* eslint-disable */
import { monClassFromJSON, phaseFromJSON, monClassToJSON, phaseToJSON } from '../chainmon/chainmon';
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
export const protobufPackage = 'williamfeng323.chainmon.chainmon';
const baseMsgCreateChainmon = { creator: '', name: '', monClass: 0, phase: 0, species: 0, databricks: 0 };
export const MsgCreateChainmon = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.monClass !== 0) {
            writer.uint32(24).int32(message.monClass);
        }
        if (message.phase !== 0) {
            writer.uint32(32).int32(message.phase);
        }
        if (message.species !== 0) {
            writer.uint32(40).uint64(message.species);
        }
        if (message.databricks !== 0) {
            writer.uint32(48).int64(message.databricks);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateChainmon };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.monClass = reader.int32();
                    break;
                case 4:
                    message.phase = reader.int32();
                    break;
                case 5:
                    message.species = longToNumber(reader.uint64());
                    break;
                case 6:
                    message.databricks = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateChainmon };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.monClass !== undefined && object.monClass !== null) {
            message.monClass = monClassFromJSON(object.monClass);
        }
        else {
            message.monClass = 0;
        }
        if (object.phase !== undefined && object.phase !== null) {
            message.phase = phaseFromJSON(object.phase);
        }
        else {
            message.phase = 0;
        }
        if (object.species !== undefined && object.species !== null) {
            message.species = Number(object.species);
        }
        else {
            message.species = 0;
        }
        if (object.databricks !== undefined && object.databricks !== null) {
            message.databricks = Number(object.databricks);
        }
        else {
            message.databricks = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.name !== undefined && (obj.name = message.name);
        message.monClass !== undefined && (obj.monClass = monClassToJSON(message.monClass));
        message.phase !== undefined && (obj.phase = phaseToJSON(message.phase));
        message.species !== undefined && (obj.species = message.species);
        message.databricks !== undefined && (obj.databricks = message.databricks);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateChainmon };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.monClass !== undefined && object.monClass !== null) {
            message.monClass = object.monClass;
        }
        else {
            message.monClass = 0;
        }
        if (object.phase !== undefined && object.phase !== null) {
            message.phase = object.phase;
        }
        else {
            message.phase = 0;
        }
        if (object.species !== undefined && object.species !== null) {
            message.species = object.species;
        }
        else {
            message.species = 0;
        }
        if (object.databricks !== undefined && object.databricks !== null) {
            message.databricks = object.databricks;
        }
        else {
            message.databricks = 0;
        }
        return message;
    }
};
const baseMsgCreateChainmonResponse = { id: 0 };
export const MsgCreateChainmonResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateChainmonResponse };
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
        const message = { ...baseMsgCreateChainmonResponse };
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
        const message = { ...baseMsgCreateChainmonResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgUpdateChainmon = { creator: '', id: 0, name: '', monClass: 0, phase: 0, species: 0, databricks: 0 };
export const MsgUpdateChainmon = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.monClass !== 0) {
            writer.uint32(32).int32(message.monClass);
        }
        if (message.phase !== 0) {
            writer.uint32(40).int32(message.phase);
        }
        if (message.species !== 0) {
            writer.uint32(48).uint64(message.species);
        }
        if (message.databricks !== 0) {
            writer.uint32(56).int64(message.databricks);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateChainmon };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.monClass = reader.int32();
                    break;
                case 5:
                    message.phase = reader.int32();
                    break;
                case 6:
                    message.species = longToNumber(reader.uint64());
                    break;
                case 7:
                    message.databricks = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateChainmon };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.monClass !== undefined && object.monClass !== null) {
            message.monClass = monClassFromJSON(object.monClass);
        }
        else {
            message.monClass = 0;
        }
        if (object.phase !== undefined && object.phase !== null) {
            message.phase = phaseFromJSON(object.phase);
        }
        else {
            message.phase = 0;
        }
        if (object.species !== undefined && object.species !== null) {
            message.species = Number(object.species);
        }
        else {
            message.species = 0;
        }
        if (object.databricks !== undefined && object.databricks !== null) {
            message.databricks = Number(object.databricks);
        }
        else {
            message.databricks = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.monClass !== undefined && (obj.monClass = monClassToJSON(message.monClass));
        message.phase !== undefined && (obj.phase = phaseToJSON(message.phase));
        message.species !== undefined && (obj.species = message.species);
        message.databricks !== undefined && (obj.databricks = message.databricks);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateChainmon };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.monClass !== undefined && object.monClass !== null) {
            message.monClass = object.monClass;
        }
        else {
            message.monClass = 0;
        }
        if (object.phase !== undefined && object.phase !== null) {
            message.phase = object.phase;
        }
        else {
            message.phase = 0;
        }
        if (object.species !== undefined && object.species !== null) {
            message.species = object.species;
        }
        else {
            message.species = 0;
        }
        if (object.databricks !== undefined && object.databricks !== null) {
            message.databricks = object.databricks;
        }
        else {
            message.databricks = 0;
        }
        return message;
    }
};
const baseMsgUpdateChainmonResponse = {};
export const MsgUpdateChainmonResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateChainmonResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateChainmonResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateChainmonResponse };
        return message;
    }
};
const baseMsgDeleteChainmon = { creator: '', id: 0 };
export const MsgDeleteChainmon = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteChainmon };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        const message = { ...baseMsgDeleteChainmon };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
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
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteChainmon };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgDeleteChainmonResponse = {};
export const MsgDeleteChainmonResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteChainmonResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteChainmonResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteChainmonResponse };
        return message;
    }
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateChainmon(request) {
        const data = MsgCreateChainmon.encode(request).finish();
        const promise = this.rpc.request('williamfeng323.chainmon.chainmon.Msg', 'CreateChainmon', data);
        return promise.then((data) => MsgCreateChainmonResponse.decode(new Reader(data)));
    }
    UpdateChainmon(request) {
        const data = MsgUpdateChainmon.encode(request).finish();
        const promise = this.rpc.request('williamfeng323.chainmon.chainmon.Msg', 'UpdateChainmon', data);
        return promise.then((data) => MsgUpdateChainmonResponse.decode(new Reader(data)));
    }
    DeleteChainmon(request) {
        const data = MsgDeleteChainmon.encode(request).finish();
        const promise = this.rpc.request('williamfeng323.chainmon.chainmon.Msg', 'DeleteChainmon', data);
        return promise.then((data) => MsgDeleteChainmonResponse.decode(new Reader(data)));
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
