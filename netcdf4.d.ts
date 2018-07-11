declare module "netcdf4" {
  export class File{
    constructor(filePath: string, mode: string)
    root: Group
    close(): void
    sync(): void
  }

  export class Dimension {
    readonly id: number
    name: string
    readonly length: any
  }

  export class Attribute {
    readonly id: number
    name: string
    value: any
    delete(): void
  }

  export class Variable {
    readonly id: number
    name: string
    readonly type: string
    readonly attributes: Attribute[]
    readonly dimension: Dimension[]
    endianness: string
    checksummode: string
    chunkmode: string
    chunksizes: any[]
    fillmode: boolean
    fillvalue: any
    compressionshuffle: boolean
    compressiondeflate: boolean
    compressionlevel: number
    read(pos: number): any
    readSlice(...args: number[]): any[]
    readStridedSlice(...args: number[]): any[]
    write(...args: any[]): void
    writeSlice(...args: any[]): void
    writeStridedSlice(...args: any[]): void
    addAttribute(name: string, type: string, value: any): Attribute
  }

  export class Group {
    readonly id: number
    readonly name: string
    readonly fullname: string
    readonly variables: Variable[]
    readonly dimensions: Dimension[]
    readonly unlimited: Dimension[]
    readonly attributes: Attribute[]
    readonly subgroups: Group[]
    addVariable(name: string, type: "byte" | "char", dimensions: number[]): Variable
    addDimension(name: string, length: number | "unlimited"): void
  }
}
