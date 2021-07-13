/* eslint-disable */
import { MonClass, Phase, monClassFromJSON, phaseFromJSON, monClassToJSON, phaseToJSON } from '../chainmon/chainmon'
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'williamfeng323.chainmon.chainmon'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateChainmon {
  creator: string
  name: string
  monClass: MonClass
  phase: Phase
  species: number
  databricks: number
}

export interface MsgCreateChainmonResponse {
  id: number
}

export interface MsgUpdateChainmon {
  creator: string
  id: number
  name: string
  monClass: MonClass
  phase: Phase
  species: number
  databricks: number
}

export interface MsgUpdateChainmonResponse {}

export interface MsgDeleteChainmon {
  creator: string
  id: number
}

export interface MsgDeleteChainmonResponse {}

const baseMsgCreateChainmon: object = { creator: '', name: '', monClass: 0, phase: 0, species: 0, databricks: 0 }

export const MsgCreateChainmon = {
  encode(message: MsgCreateChainmon, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    if (message.monClass !== 0) {
      writer.uint32(24).int32(message.monClass)
    }
    if (message.phase !== 0) {
      writer.uint32(32).int32(message.phase)
    }
    if (message.species !== 0) {
      writer.uint32(40).uint64(message.species)
    }
    if (message.databricks !== 0) {
      writer.uint32(48).int64(message.databricks)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateChainmon {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateChainmon } as MsgCreateChainmon
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.name = reader.string()
          break
        case 3:
          message.monClass = reader.int32() as any
          break
        case 4:
          message.phase = reader.int32() as any
          break
        case 5:
          message.species = longToNumber(reader.uint64() as Long)
          break
        case 6:
          message.databricks = longToNumber(reader.int64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateChainmon {
    const message = { ...baseMsgCreateChainmon } as MsgCreateChainmon
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.monClass !== undefined && object.monClass !== null) {
      message.monClass = monClassFromJSON(object.monClass)
    } else {
      message.monClass = 0
    }
    if (object.phase !== undefined && object.phase !== null) {
      message.phase = phaseFromJSON(object.phase)
    } else {
      message.phase = 0
    }
    if (object.species !== undefined && object.species !== null) {
      message.species = Number(object.species)
    } else {
      message.species = 0
    }
    if (object.databricks !== undefined && object.databricks !== null) {
      message.databricks = Number(object.databricks)
    } else {
      message.databricks = 0
    }
    return message
  },

  toJSON(message: MsgCreateChainmon): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.name !== undefined && (obj.name = message.name)
    message.monClass !== undefined && (obj.monClass = monClassToJSON(message.monClass))
    message.phase !== undefined && (obj.phase = phaseToJSON(message.phase))
    message.species !== undefined && (obj.species = message.species)
    message.databricks !== undefined && (obj.databricks = message.databricks)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateChainmon>): MsgCreateChainmon {
    const message = { ...baseMsgCreateChainmon } as MsgCreateChainmon
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    if (object.monClass !== undefined && object.monClass !== null) {
      message.monClass = object.monClass
    } else {
      message.monClass = 0
    }
    if (object.phase !== undefined && object.phase !== null) {
      message.phase = object.phase
    } else {
      message.phase = 0
    }
    if (object.species !== undefined && object.species !== null) {
      message.species = object.species
    } else {
      message.species = 0
    }
    if (object.databricks !== undefined && object.databricks !== null) {
      message.databricks = object.databricks
    } else {
      message.databricks = 0
    }
    return message
  }
}

const baseMsgCreateChainmonResponse: object = { id: 0 }

export const MsgCreateChainmonResponse = {
  encode(message: MsgCreateChainmonResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateChainmonResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateChainmonResponse } as MsgCreateChainmonResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateChainmonResponse {
    const message = { ...baseMsgCreateChainmonResponse } as MsgCreateChainmonResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateChainmonResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateChainmonResponse>): MsgCreateChainmonResponse {
    const message = { ...baseMsgCreateChainmonResponse } as MsgCreateChainmonResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateChainmon: object = { creator: '', id: 0, name: '', monClass: 0, phase: 0, species: 0, databricks: 0 }

export const MsgUpdateChainmon = {
  encode(message: MsgUpdateChainmon, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name)
    }
    if (message.monClass !== 0) {
      writer.uint32(32).int32(message.monClass)
    }
    if (message.phase !== 0) {
      writer.uint32(40).int32(message.phase)
    }
    if (message.species !== 0) {
      writer.uint32(48).uint64(message.species)
    }
    if (message.databricks !== 0) {
      writer.uint32(56).int64(message.databricks)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateChainmon {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateChainmon } as MsgUpdateChainmon
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.name = reader.string()
          break
        case 4:
          message.monClass = reader.int32() as any
          break
        case 5:
          message.phase = reader.int32() as any
          break
        case 6:
          message.species = longToNumber(reader.uint64() as Long)
          break
        case 7:
          message.databricks = longToNumber(reader.int64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateChainmon {
    const message = { ...baseMsgUpdateChainmon } as MsgUpdateChainmon
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.monClass !== undefined && object.monClass !== null) {
      message.monClass = monClassFromJSON(object.monClass)
    } else {
      message.monClass = 0
    }
    if (object.phase !== undefined && object.phase !== null) {
      message.phase = phaseFromJSON(object.phase)
    } else {
      message.phase = 0
    }
    if (object.species !== undefined && object.species !== null) {
      message.species = Number(object.species)
    } else {
      message.species = 0
    }
    if (object.databricks !== undefined && object.databricks !== null) {
      message.databricks = Number(object.databricks)
    } else {
      message.databricks = 0
    }
    return message
  },

  toJSON(message: MsgUpdateChainmon): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.name !== undefined && (obj.name = message.name)
    message.monClass !== undefined && (obj.monClass = monClassToJSON(message.monClass))
    message.phase !== undefined && (obj.phase = phaseToJSON(message.phase))
    message.species !== undefined && (obj.species = message.species)
    message.databricks !== undefined && (obj.databricks = message.databricks)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateChainmon>): MsgUpdateChainmon {
    const message = { ...baseMsgUpdateChainmon } as MsgUpdateChainmon
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    if (object.monClass !== undefined && object.monClass !== null) {
      message.monClass = object.monClass
    } else {
      message.monClass = 0
    }
    if (object.phase !== undefined && object.phase !== null) {
      message.phase = object.phase
    } else {
      message.phase = 0
    }
    if (object.species !== undefined && object.species !== null) {
      message.species = object.species
    } else {
      message.species = 0
    }
    if (object.databricks !== undefined && object.databricks !== null) {
      message.databricks = object.databricks
    } else {
      message.databricks = 0
    }
    return message
  }
}

const baseMsgUpdateChainmonResponse: object = {}

export const MsgUpdateChainmonResponse = {
  encode(_: MsgUpdateChainmonResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateChainmonResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateChainmonResponse } as MsgUpdateChainmonResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateChainmonResponse {
    const message = { ...baseMsgUpdateChainmonResponse } as MsgUpdateChainmonResponse
    return message
  },

  toJSON(_: MsgUpdateChainmonResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateChainmonResponse>): MsgUpdateChainmonResponse {
    const message = { ...baseMsgUpdateChainmonResponse } as MsgUpdateChainmonResponse
    return message
  }
}

const baseMsgDeleteChainmon: object = { creator: '', id: 0 }

export const MsgDeleteChainmon = {
  encode(message: MsgDeleteChainmon, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteChainmon {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteChainmon } as MsgDeleteChainmon
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteChainmon {
    const message = { ...baseMsgDeleteChainmon } as MsgDeleteChainmon
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgDeleteChainmon): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteChainmon>): MsgDeleteChainmon {
    const message = { ...baseMsgDeleteChainmon } as MsgDeleteChainmon
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgDeleteChainmonResponse: object = {}

export const MsgDeleteChainmonResponse = {
  encode(_: MsgDeleteChainmonResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteChainmonResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteChainmonResponse } as MsgDeleteChainmonResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteChainmonResponse {
    const message = { ...baseMsgDeleteChainmonResponse } as MsgDeleteChainmonResponse
    return message
  },

  toJSON(_: MsgDeleteChainmonResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteChainmonResponse>): MsgDeleteChainmonResponse {
    const message = { ...baseMsgDeleteChainmonResponse } as MsgDeleteChainmonResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateChainmon(request: MsgCreateChainmon): Promise<MsgCreateChainmonResponse>
  UpdateChainmon(request: MsgUpdateChainmon): Promise<MsgUpdateChainmonResponse>
  DeleteChainmon(request: MsgDeleteChainmon): Promise<MsgDeleteChainmonResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreateChainmon(request: MsgCreateChainmon): Promise<MsgCreateChainmonResponse> {
    const data = MsgCreateChainmon.encode(request).finish()
    const promise = this.rpc.request('williamfeng323.chainmon.chainmon.Msg', 'CreateChainmon', data)
    return promise.then((data) => MsgCreateChainmonResponse.decode(new Reader(data)))
  }

  UpdateChainmon(request: MsgUpdateChainmon): Promise<MsgUpdateChainmonResponse> {
    const data = MsgUpdateChainmon.encode(request).finish()
    const promise = this.rpc.request('williamfeng323.chainmon.chainmon.Msg', 'UpdateChainmon', data)
    return promise.then((data) => MsgUpdateChainmonResponse.decode(new Reader(data)))
  }

  DeleteChainmon(request: MsgDeleteChainmon): Promise<MsgDeleteChainmonResponse> {
    const data = MsgDeleteChainmon.encode(request).finish()
    const promise = this.rpc.request('williamfeng323.chainmon.chainmon.Msg', 'DeleteChainmon', data)
    return promise.then((data) => MsgDeleteChainmonResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
