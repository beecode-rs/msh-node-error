"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = exports._errFn = void 0;
const enum_1 = require("./enum");
const error_base_1 = require("./error-base");
const _errFn = (errorCode) => (message) => new error_base_1.ErrorBase(errorCode, message);
exports._errFn = _errFn;
exports.error = {
    client: {
        badRequest: exports._errFn(enum_1.ErrorCodeType.BAD_REQUEST),
        unauthorized: exports._errFn(enum_1.ErrorCodeType.UNAUTHORIZED),
        paymentRequired: exports._errFn(enum_1.ErrorCodeType.PAYMENT_REQUIRED),
        forbidden: exports._errFn(enum_1.ErrorCodeType.FORBIDDEN),
        notFound: exports._errFn(enum_1.ErrorCodeType.NOT_FOUND),
        methodNotAllowed: exports._errFn(enum_1.ErrorCodeType.METHOD_NOT_ALLOWED),
        notAcceptable: exports._errFn(enum_1.ErrorCodeType.NOT_ACCEPTABLE),
        proxyAuthenticationRequired: exports._errFn(enum_1.ErrorCodeType.PROXY_AUTHENTICATION_REQUIRED),
        requestTimeout: exports._errFn(enum_1.ErrorCodeType.REQUEST_TIMEOUT),
        conflict: exports._errFn(enum_1.ErrorCodeType.CONFLICT),
        gone: exports._errFn(enum_1.ErrorCodeType.GONE),
        lengthRequired: exports._errFn(enum_1.ErrorCodeType.LENGTH_REQUIRED),
        preconditionFailed: exports._errFn(enum_1.ErrorCodeType.PRECONDITION_FAILED),
        payloadTooLarge: exports._errFn(enum_1.ErrorCodeType.PAYLOAD_TOO_LARGE),
        requestUriTooLong: exports._errFn(enum_1.ErrorCodeType.REQUEST__URI_TOO_LONG),
        unsupportedMediaType: exports._errFn(enum_1.ErrorCodeType.UNSUPPORTED_MEDIA_TYPE),
        requestedRangeNotSatisfiable: exports._errFn(enum_1.ErrorCodeType.REQUESTED_RANGE_NOT_SATISFIABLE),
        expectationFailed: exports._errFn(enum_1.ErrorCodeType.EXPECTATION_FAILED),
        misdirectedRequest: exports._errFn(enum_1.ErrorCodeType.MISDIRECTED_REQUEST),
        unprocessableEntity: exports._errFn(enum_1.ErrorCodeType.UNPROCESSABLE_ENTITY),
        locked: exports._errFn(enum_1.ErrorCodeType.LOCKED),
        failedDependency: exports._errFn(enum_1.ErrorCodeType.FAILED_DEPENDENCY),
        upgradeRequired: exports._errFn(enum_1.ErrorCodeType.UPGRADE_REQUIRED),
        preconditionRequired: exports._errFn(enum_1.ErrorCodeType.PRECONDITION_REQUIRED),
        tooManyRequests: exports._errFn(enum_1.ErrorCodeType.TOO_MANY_REQUESTS),
        requestHeaderFieldsTooLarge: exports._errFn(enum_1.ErrorCodeType.REQUEST_HEADER_FIELDS_TOO_LARGE),
        connectionClosedWithoutResponse: exports._errFn(enum_1.ErrorCodeType.CONNECTION_CLOSED_WITHOUT_RESPONSE),
        unavailableForLegalReasons: exports._errFn(enum_1.ErrorCodeType.UNAVAILABLE_FOR_LEGAL_REASONS),
        clientClosedRequest: exports._errFn(enum_1.ErrorCodeType.CLIENT_CLOSED_REQUEST),
    },
    server: {
        internalServerError: exports._errFn(enum_1.ErrorCodeType.INTERNAL_SERVER_ERROR),
        notImplemented: exports._errFn(enum_1.ErrorCodeType.NOT_IMPLEMENTED),
        badGateway: exports._errFn(enum_1.ErrorCodeType.BAD_GATEWAY),
        serviceUnavailable: exports._errFn(enum_1.ErrorCodeType.SERVICE_UNAVAILABLE),
        gatewayTimeout: exports._errFn(enum_1.ErrorCodeType.GATEWAY_TIMEOUT),
        httpVersionNotSupported: exports._errFn(enum_1.ErrorCodeType.HTTP_VERSION_NOT_SUPPORTED),
        variantAlsoNegotiates: exports._errFn(enum_1.ErrorCodeType.VARIANT_ALSO_NEGOTIATES),
        insufficientStorage: exports._errFn(enum_1.ErrorCodeType.INSUFFICIENT_STORAGE),
        loopDetected: exports._errFn(enum_1.ErrorCodeType.LOOP_DETECTED),
        notExtended: exports._errFn(enum_1.ErrorCodeType.NOT_EXTENDED),
        networkAuthenticationRequired: exports._errFn(enum_1.ErrorCodeType.NETWORK_AUTHENTICATION_REQUIRED),
        networkConnectTimeoutError: exports._errFn(enum_1.ErrorCodeType.NETWORK_CONNECT_TIMEOUT_ERROR),
    },
};
//# sourceMappingURL=node-error.js.map