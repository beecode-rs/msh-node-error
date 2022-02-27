import { ErrorCodeType } from './enum'
import { ErrorBase } from './error-base'

export const _errFn = (errorCode: ErrorCodeType) => {
  return (message?: string): Error => new ErrorBase(errorCode, message)
}
export const error = {
  client: {
    badRequest: _errFn(ErrorCodeType.BAD_REQUEST),
    unauthorized: _errFn(ErrorCodeType.UNAUTHORIZED),
    paymentRequired: _errFn(ErrorCodeType.PAYMENT_REQUIRED),
    forbidden: _errFn(ErrorCodeType.FORBIDDEN),
    notFound: _errFn(ErrorCodeType.NOT_FOUND),
    methodNotAllowed: _errFn(ErrorCodeType.METHOD_NOT_ALLOWED),
    notAcceptable: _errFn(ErrorCodeType.NOT_ACCEPTABLE),
    proxyAuthenticationRequired: _errFn(ErrorCodeType.PROXY_AUTHENTICATION_REQUIRED),
    requestTimeout: _errFn(ErrorCodeType.REQUEST_TIMEOUT),
    conflict: _errFn(ErrorCodeType.CONFLICT),
    gone: _errFn(ErrorCodeType.GONE),
    lengthRequired: _errFn(ErrorCodeType.LENGTH_REQUIRED),
    preconditionFailed: _errFn(ErrorCodeType.PRECONDITION_FAILED),
    payloadTooLarge: _errFn(ErrorCodeType.PAYLOAD_TOO_LARGE),
    requestUriTooLong: _errFn(ErrorCodeType.REQUEST__URI_TOO_LONG),
    unsupportedMediaType: _errFn(ErrorCodeType.UNSUPPORTED_MEDIA_TYPE),
    requestedRangeNotSatisfiable: _errFn(ErrorCodeType.REQUESTED_RANGE_NOT_SATISFIABLE),
    expectationFailed: _errFn(ErrorCodeType.EXPECTATION_FAILED),
    misdirectedRequest: _errFn(ErrorCodeType.MISDIRECTED_REQUEST),
    unprocessableEntity: _errFn(ErrorCodeType.UNPROCESSABLE_ENTITY),
    locked: _errFn(ErrorCodeType.LOCKED),
    failedDependency: _errFn(ErrorCodeType.FAILED_DEPENDENCY),
    upgradeRequired: _errFn(ErrorCodeType.UPGRADE_REQUIRED),
    preconditionRequired: _errFn(ErrorCodeType.PRECONDITION_REQUIRED),
    tooManyRequests: _errFn(ErrorCodeType.TOO_MANY_REQUESTS),
    requestHeaderFieldsTooLarge: _errFn(ErrorCodeType.REQUEST_HEADER_FIELDS_TOO_LARGE),
    connectionClosedWithoutResponse: _errFn(ErrorCodeType.CONNECTION_CLOSED_WITHOUT_RESPONSE),
    unavailableForLegalReasons: _errFn(ErrorCodeType.UNAVAILABLE_FOR_LEGAL_REASONS),
    clientClosedRequest: _errFn(ErrorCodeType.CLIENT_CLOSED_REQUEST),
  },
  server: {
    internalServerError: _errFn(ErrorCodeType.INTERNAL_SERVER_ERROR),
    notImplemented: _errFn(ErrorCodeType.NOT_IMPLEMENTED),
    badGateway: _errFn(ErrorCodeType.BAD_GATEWAY),
    serviceUnavailable: _errFn(ErrorCodeType.SERVICE_UNAVAILABLE),
    gatewayTimeout: _errFn(ErrorCodeType.GATEWAY_TIMEOUT),
    httpVersionNotSupported: _errFn(ErrorCodeType.HTTP_VERSION_NOT_SUPPORTED),
    variantAlsoNegotiates: _errFn(ErrorCodeType.VARIANT_ALSO_NEGOTIATES),
    insufficientStorage: _errFn(ErrorCodeType.INSUFFICIENT_STORAGE),
    loopDetected: _errFn(ErrorCodeType.LOOP_DETECTED),
    notExtended: _errFn(ErrorCodeType.NOT_EXTENDED),
    networkAuthenticationRequired: _errFn(ErrorCodeType.NETWORK_AUTHENTICATION_REQUIRED),
    networkConnectTimeoutError: _errFn(ErrorCodeType.NETWORK_CONNECT_TIMEOUT_ERROR),
  },
}
