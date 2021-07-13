/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { Chainmon } from '../chainmon/chainmon'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'

export const protobufPackage = 'williamfeng323.chainmon.chainmon'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetChainmonRequest {
  id: number
}

export interface QueryGetChainmonResponse {
  Chainmon: Chainmon | undefined
}

export interface QueryAllChainmonRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllChainmonResponse {
  Chainmon: Chainmon[]
  pagination: PageResponse | undefined
}

const baseQueryGetChainmonRequest: object = { id: 0 }

export const QueryGetChainmonRequest = {
  encode(message: QueryGetChainmonRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetChainmonRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetChainmonRequest } as QueryGetChainmonRequest
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

  fromJSON(object: any): QueryGetChainmonRequest {
    const message = { ...baseQueryGetChainmonRequest } as QueryGetChainmonRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetChainmonRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetChainmonRequest>): QueryGetChainmonRequest {
    const message = { ...baseQueryGetChainmonRequest } as QueryGetChainmonRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetChainmonResponse: object = {}

export const QueryGetChainmonResponse = {
  encode(message: QueryGetChainmonResponse, writer: Writer = Writer.create()): Writer {
    if (message.Chainmon !== undefined) {
      Chainmon.encode(message.Chainmon, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetChainmonResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetChainmonResponse } as QueryGetChainmonResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Chainmon = Chainmon.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetChainmonResponse {
    const message = { ...baseQueryGetChainmonResponse } as QueryGetChainmonResponse
    if (object.Chainmon !== undefined && object.Chainmon !== null) {
      message.Chainmon = Chainmon.fromJSON(object.Chainmon)
    } else {
      message.Chainmon = undefined
    }
    return message
  },

  toJSON(message: QueryGetChainmonResponse): unknown {
    const obj: any = {}
    message.Chainmon !== undefined && (obj.Chainmon = message.Chainmon ? Chainmon.toJSON(message.Chainmon) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetChainmonResponse>): QueryGetChainmonResponse {
    const message = { ...baseQueryGetChainmonResponse } as QueryGetChainmonResponse
    if (object.Chainmon !== undefined && object.Chainmon !== null) {
      message.Chainmon = Chainmon.fromPartial(object.Chainmon)
    } else {
      message.Chainmon = undefined
    }
    return message
  }
}

const baseQueryAllChainmonRequest: object = {}

export const QueryAllChainmonRequest = {
  encode(message: QueryAllChainmonRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllChainmonRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllChainmonRequest } as QueryAllChainmonRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllChainmonRequest {
    const message = { ...baseQueryAllChainmonRequest } as QueryAllChainmonRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllChainmonRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllChainmonRequest>): QueryAllChainmonRequest {
    const message = { ...baseQueryAllChainmonRequest } as QueryAllChainmonRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllChainmonResponse: object = {}

export const QueryAllChainmonResponse = {
  encode(message: QueryAllChainmonResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Chainmon) {
      Chainmon.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllChainmonResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllChainmonResponse } as QueryAllChainmonResponse
    message.Chainmon = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Chainmon.push(Chainmon.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllChainmonResponse {
    const message = { ...baseQueryAllChainmonResponse } as QueryAllChainmonResponse
    message.Chainmon = []
    if (object.Chainmon !== undefined && object.Chainmon !== null) {
      for (const e of object.Chainmon) {
        message.Chainmon.push(Chainmon.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllChainmonResponse): unknown {
    const obj: any = {}
    if (message.Chainmon) {
      obj.Chainmon = message.Chainmon.map((e) => (e ? Chainmon.toJSON(e) : undefined))
    } else {
      obj.Chainmon = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllChainmonResponse>): QueryAllChainmonResponse {
    const message = { ...baseQueryAllChainmonResponse } as QueryAllChainmonResponse
    message.Chainmon = []
    if (object.Chainmon !== undefined && object.Chainmon !== null) {
      for (const e of object.Chainmon) {
        message.Chainmon.push(Chainmon.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a chainmon by id. */
  Chainmon(request: QueryGetChainmonRequest): Promise<QueryGetChainmonResponse>
  /** Queries a list of chainmon items. */
  ChainmonAll(request: QueryAllChainmonRequest): Promise<QueryAllChainmonResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  Chainmon(request: QueryGetChainmonRequest): Promise<QueryGetChainmonResponse> {
    const data = QueryGetChainmonRequest.encode(request).finish()
    const promise = this.rpc.request('williamfeng323.chainmon.chainmon.Query', 'Chainmon', data)
    return promise.then((data) => QueryGetChainmonResponse.decode(new Reader(data)))
  }

  ChainmonAll(request: QueryAllChainmonRequest): Promise<QueryAllChainmonResponse> {
    const data = QueryAllChainmonRequest.encode(request).finish()
    const promise = this.rpc.request('williamfeng323.chainmon.chainmon.Query', 'ChainmonAll', data)
    return promise.then((data) => QueryAllChainmonResponse.decode(new Reader(data)))
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
