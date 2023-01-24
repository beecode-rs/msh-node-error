"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeError = exports._errorHOF = void 0;
const http_response_code_1 = require("./http-response-code");
const node_error_base_1 = require("./node-error-base");
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const _errorHOF = (httpCode) => {
    function closure(messageOrParams, payload) {
        if (typeof messageOrParams === 'string') {
            return new node_error_base_1.NodeErrorBase({ message: messageOrParams, httpCode, payload });
        }
        return new node_error_base_1.NodeErrorBase(Object.assign(Object.assign({}, messageOrParams), { httpCode }));
    }
    return closure;
};
exports._errorHOF = _errorHOF;
exports.nodeError = {
    client: {
        badRequest: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.BAD_REQUEST),
        unauthorized: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.UNAUTHORIZED),
        paymentRequired: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.PAYMENT_REQUIRED),
        forbidden: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.FORBIDDEN),
        notFound: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.NOT_FOUND),
        methodNotAllowed: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.METHOD_NOT_ALLOWED),
        notAcceptable: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.NOT_ACCEPTABLE),
        proxyAuthenticationRequired: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.PROXY_AUTHENTICATION_REQUIRED),
        requestTimeout: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.REQUEST_TIMEOUT),
        conflict: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.CONFLICT),
        gone: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.GONE),
        lengthRequired: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.LENGTH_REQUIRED),
        preconditionFailed: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.PRECONDITION_FAILED),
        payloadTooLarge: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.PAYLOAD_TOO_LARGE),
        requestUriTooLong: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.REQUEST__URI_TOO_LONG),
        unsupportedMediaType: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.UNSUPPORTED_MEDIA_TYPE),
        requestedRangeNotSatisfiable: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.REQUESTED_RANGE_NOT_SATISFIABLE),
        expectationFailed: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.EXPECTATION_FAILED),
        misdirectedRequest: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.MISDIRECTED_REQUEST),
        unprocessableEntity: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.UNPROCESSABLE_ENTITY),
        locked: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.LOCKED),
        failedDependency: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.FAILED_DEPENDENCY),
        upgradeRequired: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.UPGRADE_REQUIRED),
        preconditionRequired: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.PRECONDITION_REQUIRED),
        tooManyRequests: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.TOO_MANY_REQUESTS),
        requestHeaderFieldsTooLarge: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.REQUEST_HEADER_FIELDS_TOO_LARGE),
        connectionClosedWithoutResponse: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.CONNECTION_CLOSED_WITHOUT_RESPONSE),
        unavailableForLegalReasons: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.UNAVAILABLE_FOR_LEGAL_REASONS),
        clientClosedRequest: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.CLIENT_CLOSED_REQUEST),
    },
    server: {
        internalServerError: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.INTERNAL_SERVER_ERROR),
        notImplemented: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.NOT_IMPLEMENTED),
        badGateway: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.BAD_GATEWAY),
        serviceUnavailable: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.SERVICE_UNAVAILABLE),
        gatewayTimeout: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.GATEWAY_TIMEOUT),
        httpVersionNotSupported: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.HTTP_VERSION_NOT_SUPPORTED),
        variantAlsoNegotiates: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.VARIANT_ALSO_NEGOTIATES),
        insufficientStorage: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.INSUFFICIENT_STORAGE),
        loopDetected: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.LOOP_DETECTED),
        notExtended: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.NOT_EXTENDED),
        networkAuthenticationRequired: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.NETWORK_AUTHENTICATION_REQUIRED),
        networkConnectTimeoutError: (0, exports._errorHOF)(http_response_code_1.HttpResponseCodeMapper.NETWORK_CONNECT_TIMEOUT_ERROR),
    },
};
//# sourceMappingURL=node-error.js.map