import { ErrorCodeType } from './enum'

export class ErrorBase extends Error {
  private readonly __errorCode: ErrorCodeType

  public get ErrorCode(): ErrorCodeType {
    return this.__errorCode
  }

  public get HTTPErrorCode(): number {
    return this.__errorCode as number
  }

  public get ErrorTypeName(): string {
    return this._replaceUnderscores(ErrorCodeType[this.__errorCode])
  }

  constructor(errorCode: ErrorCodeType, message?: string) {
    super()
    this.__errorCode = errorCode
    this.message = message ?? this.ErrorTypeName
  }

  protected _replaceUnderscores(withUnderscores: string): string {
    return withUnderscores.split('__').join('-').split('_').join(' ')
  }
}
