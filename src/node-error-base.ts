import { stringUtil } from './util/string-util'
import { HttpResponseCodeMapper } from './http-response-code'

export type NodeErrorPayload = { [k: string]: any }

export class NodeErrorBase<T extends NodeErrorPayload = any> extends Error {
  httpCode: number
  name: string
  payload?: T

  constructor(params: { httpCode: number | HttpResponseCodeMapper; name?: string; message?: string; payload?: T }) {
    const { httpCode, name = stringUtil.codeNameFromEnum(httpCode), message = `${httpCode} - ${name}`, payload } = params
    super(message)
    this.httpCode = httpCode
    this.name = name
    this.payload = payload
  }
}

// TODO I was unable to use ConstructorParameters here, not sure why :thinking:
// export const nodeErrorBase = <T extends NodeErrorPayload = any>(...params: ConstructorParameters<typeof NodeErrorBase<T>>): NodeErrorBase<T> => {
// return new NodeErrorBase<T>(...params)
export const nodeErrorBase = <T extends NodeErrorPayload = any>(params: {
  httpCode: number | HttpResponseCodeMapper
  name?: string
  message?: string
  payload?: T
}): NodeErrorBase<T> => {
  return new NodeErrorBase<T>(params)
}
