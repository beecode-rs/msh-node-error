import { HttpResponseCodeMapper } from './http-response-code'
import { NodeErrorBase, NodeErrorPayload } from './node-error-base'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const _errorHOF = (httpCode: HttpResponseCodeMapper) => {
  function closure<T extends NodeErrorPayload = any>(message?: string, payload?: T): NodeErrorBase
  function closure<T extends NodeErrorPayload = any>(params?: { name?: string; message?: string; payload?: T }): NodeErrorBase
  function closure<T extends NodeErrorPayload = any>(
    messageOrParams?: string | { name?: string; message?: string; payload?: T },
    payload?: T
  ): NodeErrorBase {
    if (typeof messageOrParams === 'string') {
      return new NodeErrorBase<T>({ message: messageOrParams, httpCode, payload })
    }
    return new NodeErrorBase<T>({ ...messageOrParams, httpCode })
  }

  return closure
}

export const nodeError = {
  client: {
    badRequest: _errorHOF(HttpResponseCodeMapper.BAD_REQUEST),
    unauthorized: _errorHOF(HttpResponseCodeMapper.UNAUTHORIZED),
    paymentRequired: _errorHOF(HttpResponseCodeMapper.PAYMENT_REQUIRED),
    forbidden: _errorHOF(HttpResponseCodeMapper.FORBIDDEN),
    notFound: _errorHOF(HttpResponseCodeMapper.NOT_FOUND),
    methodNotAllowed: _errorHOF(HttpResponseCodeMapper.METHOD_NOT_ALLOWED),
    notAcceptable: _errorHOF(HttpResponseCodeMapper.NOT_ACCEPTABLE),
    proxyAuthenticationRequired: _errorHOF(HttpResponseCodeMapper.PROXY_AUTHENTICATION_REQUIRED),
    requestTimeout: _errorHOF(HttpResponseCodeMapper.REQUEST_TIMEOUT),
    conflict: _errorHOF(HttpResponseCodeMapper.CONFLICT),
    gone: _errorHOF(HttpResponseCodeMapper.GONE),
    lengthRequired: _errorHOF(HttpResponseCodeMapper.LENGTH_REQUIRED),
    preconditionFailed: _errorHOF(HttpResponseCodeMapper.PRECONDITION_FAILED),
    payloadTooLarge: _errorHOF(HttpResponseCodeMapper.PAYLOAD_TOO_LARGE),
    requestUriTooLong: _errorHOF(HttpResponseCodeMapper.REQUEST__URI_TOO_LONG),
    unsupportedMediaType: _errorHOF(HttpResponseCodeMapper.UNSUPPORTED_MEDIA_TYPE),
    requestedRangeNotSatisfiable: _errorHOF(HttpResponseCodeMapper.REQUESTED_RANGE_NOT_SATISFIABLE),
    expectationFailed: _errorHOF(HttpResponseCodeMapper.EXPECTATION_FAILED),
    misdirectedRequest: _errorHOF(HttpResponseCodeMapper.MISDIRECTED_REQUEST),
    unprocessableEntity: _errorHOF(HttpResponseCodeMapper.UNPROCESSABLE_ENTITY),
    locked: _errorHOF(HttpResponseCodeMapper.LOCKED),
    failedDependency: _errorHOF(HttpResponseCodeMapper.FAILED_DEPENDENCY),
    upgradeRequired: _errorHOF(HttpResponseCodeMapper.UPGRADE_REQUIRED),
    preconditionRequired: _errorHOF(HttpResponseCodeMapper.PRECONDITION_REQUIRED),
    tooManyRequests: _errorHOF(HttpResponseCodeMapper.TOO_MANY_REQUESTS),
    requestHeaderFieldsTooLarge: _errorHOF(HttpResponseCodeMapper.REQUEST_HEADER_FIELDS_TOO_LARGE),
    connectionClosedWithoutResponse: _errorHOF(HttpResponseCodeMapper.CONNECTION_CLOSED_WITHOUT_RESPONSE),
    unavailableForLegalReasons: _errorHOF(HttpResponseCodeMapper.UNAVAILABLE_FOR_LEGAL_REASONS),
    clientClosedRequest: _errorHOF(HttpResponseCodeMapper.CLIENT_CLOSED_REQUEST),
  },
  server: {
    internalServerError: _errorHOF(HttpResponseCodeMapper.INTERNAL_SERVER_ERROR),
    notImplemented: _errorHOF(HttpResponseCodeMapper.NOT_IMPLEMENTED),
    badGateway: _errorHOF(HttpResponseCodeMapper.BAD_GATEWAY),
    serviceUnavailable: _errorHOF(HttpResponseCodeMapper.SERVICE_UNAVAILABLE),
    gatewayTimeout: _errorHOF(HttpResponseCodeMapper.GATEWAY_TIMEOUT),
    httpVersionNotSupported: _errorHOF(HttpResponseCodeMapper.HTTP_VERSION_NOT_SUPPORTED),
    variantAlsoNegotiates: _errorHOF(HttpResponseCodeMapper.VARIANT_ALSO_NEGOTIATES),
    insufficientStorage: _errorHOF(HttpResponseCodeMapper.INSUFFICIENT_STORAGE),
    loopDetected: _errorHOF(HttpResponseCodeMapper.LOOP_DETECTED),
    notExtended: _errorHOF(HttpResponseCodeMapper.NOT_EXTENDED),
    networkAuthenticationRequired: _errorHOF(HttpResponseCodeMapper.NETWORK_AUTHENTICATION_REQUIRED),
    networkConnectTimeoutError: _errorHOF(HttpResponseCodeMapper.NETWORK_CONNECT_TIMEOUT_ERROR),
  },
}
