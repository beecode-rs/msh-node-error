"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = exports._errFn = void 0;
const enum_1 = require("./enum");
const error_base_1 = require("./error-base");
const _errFn = (errorCode) => {
    return (message) => new error_base_1.ErrorBase(errorCode, message);
};
exports._errFn = _errFn;
exports.error = {
    client: {
        badRequest: (0, exports._errFn)(enum_1.ErrorCodeType.BAD_REQUEST),
        unauthorized: (0, exports._errFn)(enum_1.ErrorCodeType.UNAUTHORIZED),
        paymentRequired: (0, exports._errFn)(enum_1.ErrorCodeType.PAYMENT_REQUIRED),
        forbidden: (0, exports._errFn)(enum_1.ErrorCodeType.FORBIDDEN),
        notFound: (0, exports._errFn)(enum_1.ErrorCodeType.NOT_FOUND),
        methodNotAllowed: (0, exports._errFn)(enum_1.ErrorCodeType.METHOD_NOT_ALLOWED),
        notAcceptable: (0, exports._errFn)(enum_1.ErrorCodeType.NOT_ACCEPTABLE),
        proxyAuthenticationRequired: (0, exports._errFn)(enum_1.ErrorCodeType.PROXY_AUTHENTICATION_REQUIRED),
        requestTimeout: (0, exports._errFn)(enum_1.ErrorCodeType.REQUEST_TIMEOUT),
        conflict: (0, exports._errFn)(enum_1.ErrorCodeType.CONFLICT),
        gone: (0, exports._errFn)(enum_1.ErrorCodeType.GONE),
        lengthRequired: (0, exports._errFn)(enum_1.ErrorCodeType.LENGTH_REQUIRED),
        preconditionFailed: (0, exports._errFn)(enum_1.ErrorCodeType.PRECONDITION_FAILED),
        payloadTooLarge: (0, exports._errFn)(enum_1.ErrorCodeType.PAYLOAD_TOO_LARGE),
        requestUriTooLong: (0, exports._errFn)(enum_1.ErrorCodeType.REQUEST__URI_TOO_LONG),
        unsupportedMediaType: (0, exports._errFn)(enum_1.ErrorCodeType.UNSUPPORTED_MEDIA_TYPE),
        requestedRangeNotSatisfiable: (0, exports._errFn)(enum_1.ErrorCodeType.REQUESTED_RANGE_NOT_SATISFIABLE),
        expectationFailed: (0, exports._errFn)(enum_1.ErrorCodeType.EXPECTATION_FAILED),
        misdirectedRequest: (0, exports._errFn)(enum_1.ErrorCodeType.MISDIRECTED_REQUEST),
        unprocessableEntity: (0, exports._errFn)(enum_1.ErrorCodeType.UNPROCESSABLE_ENTITY),
        locked: (0, exports._errFn)(enum_1.ErrorCodeType.LOCKED),
        failedDependency: (0, exports._errFn)(enum_1.ErrorCodeType.FAILED_DEPENDENCY),
        upgradeRequired: (0, exports._errFn)(enum_1.ErrorCodeType.UPGRADE_REQUIRED),
        preconditionRequired: (0, exports._errFn)(enum_1.ErrorCodeType.PRECONDITION_REQUIRED),
        tooManyRequests: (0, exports._errFn)(enum_1.ErrorCodeType.TOO_MANY_REQUESTS),
        requestHeaderFieldsTooLarge: (0, exports._errFn)(enum_1.ErrorCodeType.REQUEST_HEADER_FIELDS_TOO_LARGE),
        connectionClosedWithoutResponse: (0, exports._errFn)(enum_1.ErrorCodeType.CONNECTION_CLOSED_WITHOUT_RESPONSE),
        unavailableForLegalReasons: (0, exports._errFn)(enum_1.ErrorCodeType.UNAVAILABLE_FOR_LEGAL_REASONS),
        clientClosedRequest: (0, exports._errFn)(enum_1.ErrorCodeType.CLIENT_CLOSED_REQUEST),
    },
    server: {
        internalServerError: (0, exports._errFn)(enum_1.ErrorCodeType.INTERNAL_SERVER_ERROR),
        notImplemented: (0, exports._errFn)(enum_1.ErrorCodeType.NOT_IMPLEMENTED),
        badGateway: (0, exports._errFn)(enum_1.ErrorCodeType.BAD_GATEWAY),
        serviceUnavailable: (0, exports._errFn)(enum_1.ErrorCodeType.SERVICE_UNAVAILABLE),
        gatewayTimeout: (0, exports._errFn)(enum_1.ErrorCodeType.GATEWAY_TIMEOUT),
        httpVersionNotSupported: (0, exports._errFn)(enum_1.ErrorCodeType.HTTP_VERSION_NOT_SUPPORTED),
        variantAlsoNegotiates: (0, exports._errFn)(enum_1.ErrorCodeType.VARIANT_ALSO_NEGOTIATES),
        insufficientStorage: (0, exports._errFn)(enum_1.ErrorCodeType.INSUFFICIENT_STORAGE),
        loopDetected: (0, exports._errFn)(enum_1.ErrorCodeType.LOOP_DETECTED),
        notExtended: (0, exports._errFn)(enum_1.ErrorCodeType.NOT_EXTENDED),
        networkAuthenticationRequired: (0, exports._errFn)(enum_1.ErrorCodeType.NETWORK_AUTHENTICATION_REQUIRED),
        networkConnectTimeoutError: (0, exports._errFn)(enum_1.ErrorCodeType.NETWORK_CONNECT_TIMEOUT_ERROR),
    },
};
//# sourceMappingURL=node-error.js.map