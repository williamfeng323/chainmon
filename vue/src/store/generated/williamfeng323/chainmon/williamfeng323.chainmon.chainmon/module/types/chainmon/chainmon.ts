/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'williamfeng323.chainmon.chainmon'

export enum MonClass {
  BEAST = 0,
  INSET = 1,
  AQUATIC = 2,
  PLANT = 3,
  METAL = 4,
  DRAGON = 5,
  UNRECOGNIZED = -1
}

export function monClassFromJSON(object: any): MonClass {
  switch (object) {
    case 0:
    case 'BEAST':
      return MonClass.BEAST
    case 1:
    case 'INSET':
      return MonClass.INSET
    case 2:
    case 'AQUATIC':
      return MonClass.AQUATIC
    case 3:
    case 'PLANT':
      return MonClass.PLANT
    case 4:
    case 'METAL':
      return MonClass.METAL
    case 5:
    case 'DRAGON':
      return MonClass.DRAGON
    case -1:
    case 'UNRECOGNIZED':
    default:
      return MonClass.UNRECOGNIZED
  }
}

export function monClassToJSON(object: MonClass): string {
  switch (object) {
    case MonClass.BEAST:
      return 'BEAST'
    case MonClass.INSET:
      return 'INSET'
    case MonClass.AQUATIC:
      return 'AQUATIC'
    case MonClass.PLANT:
      return 'PLANT'
    case MonClass.METAL:
      return 'METAL'
    case MonClass.DRAGON:
      return 'DRAGON'
    default:
      return 'UNKNOWN'
  }
}

export enum Phase {
  BIT = 0,
  BYTE = 1,
  KILOBYTE = 2,
  MEGABYTE = 3,
  GIGABYTE = 4,
  TERABYTE = 5,
  UNRECOGNIZED = -1
}

export function phaseFromJSON(object: any): Phase {
  switch (object) {
    case 0:
    case 'BIT':
      return Phase.BIT
    case 1:
    case 'BYTE':
      return Phase.BYTE
    case 2:
    case 'KILOBYTE':
      return Phase.KILOBYTE
    case 3:
    case 'MEGABYTE':
      return Phase.MEGABYTE
    case 4:
    case 'GIGABYTE':
      return Phase.GIGABYTE
    case 5:
    case 'TERABYTE':
      return Phase.TERABYTE
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Phase.UNRECOGNIZED
  }
}

export function phaseToJSON(object: Phase): string {
  switch (object) {
    case Phase.BIT:
      return 'BIT'
    case Phase.BYTE:
      return 'BYTE'
    case Phase.KILOBYTE:
      return 'KILOBYTE'
    case Phase.MEGABYTE:
      return 'MEGABYTE'
    case Phase.GIGABYTE:
      return 'GIGABYTE'
    case Phase.TERABYTE:
      return 'TERABYTE'
    default:
      return 'UNKNOWN'
  }
}

export interface Chainmon {
  creator: string
  id: number
  name: string
  monClass: MonClass
  phase: Phase
  species: number
  databricks: number
}

const baseChainmon: object = { creator: '', id: 0, name: '', monClass: 0, phase: 0, species: 0, databricks: 0 }

export const Chainmon = {
  encode(message: Chainmon, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): Chainmon {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseChainmon } as Chainmon
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

  fromJSON(object: any): Chainmon {
    const message = { ...baseChainmon } as Chainmon
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

  toJSON(message: Chainmon): unknown {
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

  fromPartial(object: DeepPartial<Chainmon>): Chainmon {
    const message = { ...baseChainmon } as Chainmon
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
