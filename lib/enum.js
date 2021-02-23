"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCodeType = void 0;
/* eslint-disable @typescript-eslint/naming-convention */
var ErrorCodeType;
(function (ErrorCodeType) {
    /*********************
     * 1×× Informational
     ********************/
    ErrorCodeType[ErrorCodeType["CONTINUE"] = 100] = "CONTINUE";
    ErrorCodeType[ErrorCodeType["SWITCHING_PROTOCOLS"] = 101] = "SWITCHING_PROTOCOLS";
    ErrorCodeType[ErrorCodeType["PROCESSING"] = 102] = "PROCESSING";
    /*********************
     * 2×× Success
     ********************/
    ErrorCodeType[ErrorCodeType["OK"] = 200] = "OK";
    ErrorCodeType[ErrorCodeType["CREATED"] = 201] = "CREATED";
    ErrorCodeType[ErrorCodeType["ACCEPTED"] = 202] = "ACCEPTED";
    ErrorCodeType[ErrorCodeType["NON__AUTHORITATIVE_INFORMATION"] = 203] = "NON__AUTHORITATIVE_INFORMATION";
    ErrorCodeType[ErrorCodeType["NO_CONTENT"] = 204] = "NO_CONTENT";
    ErrorCodeType[ErrorCodeType["RESET__CONTENT"] = 205] = "RESET__CONTENT";
    ErrorCodeType[ErrorCodeType["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
    ErrorCodeType[ErrorCodeType["MULTI__STATUS"] = 207] = "MULTI__STATUS";
    ErrorCodeType[ErrorCodeType["ALREADY_REPORTED"] = 208] = "ALREADY_REPORTED";
    ErrorCodeType[ErrorCodeType["IM_USED"] = 226] = "IM_USED";
    /*********************
     * 3×× Redirection
     ********************/
    ErrorCodeType[ErrorCodeType["MULTIPLE_CHOICES"] = 300] = "MULTIPLE_CHOICES";
    ErrorCodeType[ErrorCodeType["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
    ErrorCodeType[ErrorCodeType["FOUND"] = 302] = "FOUND";
    ErrorCodeType[ErrorCodeType["SEE_OTHER"] = 303] = "SEE_OTHER";
    ErrorCodeType[ErrorCodeType["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
    ErrorCodeType[ErrorCodeType["USE_PROXY"] = 305] = "USE_PROXY";
    ErrorCodeType[ErrorCodeType["TEMPORARY_REDIRECT"] = 307] = "TEMPORARY_REDIRECT";
    ErrorCodeType[ErrorCodeType["PERMANENT_REDIRECT"] = 308] = "PERMANENT_REDIRECT";
    /*********************
     * 4×× Client Error
     ********************/
    ErrorCodeType[ErrorCodeType["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    ErrorCodeType[ErrorCodeType["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    ErrorCodeType[ErrorCodeType["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
    ErrorCodeType[ErrorCodeType["FORBIDDEN"] = 403] = "FORBIDDEN";
    ErrorCodeType[ErrorCodeType["NOT_FOUND"] = 404] = "NOT_FOUND";
    ErrorCodeType[ErrorCodeType["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
    ErrorCodeType[ErrorCodeType["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
    ErrorCodeType[ErrorCodeType["PROXY_AUTHENTICATION_REQUIRED"] = 407] = "PROXY_AUTHENTICATION_REQUIRED";
    ErrorCodeType[ErrorCodeType["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
    ErrorCodeType[ErrorCodeType["CONFLICT"] = 409] = "CONFLICT";
    ErrorCodeType[ErrorCodeType["GONE"] = 410] = "GONE";
    ErrorCodeType[ErrorCodeType["LENGTH_REQUIRED"] = 411] = "LENGTH_REQUIRED";
    ErrorCodeType[ErrorCodeType["PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
    ErrorCodeType[ErrorCodeType["PAYLOAD_TOO_LARGE"] = 413] = "PAYLOAD_TOO_LARGE";
    ErrorCodeType[ErrorCodeType["REQUEST__URI_TOO_LONG"] = 414] = "REQUEST__URI_TOO_LONG";
    ErrorCodeType[ErrorCodeType["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
    ErrorCodeType[ErrorCodeType["REQUESTED_RANGE_NOT_SATISFIABLE"] = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE";
    ErrorCodeType[ErrorCodeType["EXPECTATION_FAILED"] = 417] = "EXPECTATION_FAILED";
    ErrorCodeType[ErrorCodeType["MISDIRECTED_REQUEST"] = 421] = "MISDIRECTED_REQUEST";
    ErrorCodeType[ErrorCodeType["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
    ErrorCodeType[ErrorCodeType["LOCKED"] = 423] = "LOCKED";
    ErrorCodeType[ErrorCodeType["FAILED_DEPENDENCY"] = 424] = "FAILED_DEPENDENCY";
    ErrorCodeType[ErrorCodeType["UPGRADE_REQUIRED"] = 426] = "UPGRADE_REQUIRED";
    ErrorCodeType[ErrorCodeType["PRECONDITION_REQUIRED"] = 428] = "PRECONDITION_REQUIRED";
    ErrorCodeType[ErrorCodeType["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
    ErrorCodeType[ErrorCodeType["REQUEST_HEADER_FIELDS_TOO_LARGE"] = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE";
    ErrorCodeType[ErrorCodeType["CONNECTION_CLOSED_WITHOUT_RESPONSE"] = 444] = "CONNECTION_CLOSED_WITHOUT_RESPONSE";
    ErrorCodeType[ErrorCodeType["UNAVAILABLE_FOR_LEGAL_REASONS"] = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS";
    ErrorCodeType[ErrorCodeType["CLIENT_CLOSED_REQUEST"] = 499] = "CLIENT_CLOSED_REQUEST";
    /*********************
     * 5×× Server Error
     ********************/
    ErrorCodeType[ErrorCodeType["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    ErrorCodeType[ErrorCodeType["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
    ErrorCodeType[ErrorCodeType["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
    ErrorCodeType[ErrorCodeType["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
    ErrorCodeType[ErrorCodeType["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
    ErrorCodeType[ErrorCodeType["HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
    ErrorCodeType[ErrorCodeType["VARIANT_ALSO_NEGOTIATES"] = 506] = "VARIANT_ALSO_NEGOTIATES";
    ErrorCodeType[ErrorCodeType["INSUFFICIENT_STORAGE"] = 507] = "INSUFFICIENT_STORAGE";
    ErrorCodeType[ErrorCodeType["LOOP_DETECTED"] = 508] = "LOOP_DETECTED";
    ErrorCodeType[ErrorCodeType["NOT_EXTENDED"] = 510] = "NOT_EXTENDED";
    ErrorCodeType[ErrorCodeType["NETWORK_AUTHENTICATION_REQUIRED"] = 511] = "NETWORK_AUTHENTICATION_REQUIRED";
    ErrorCodeType[ErrorCodeType["NETWORK_CONNECT_TIMEOUT_ERROR"] = 599] = "NETWORK_CONNECT_TIMEOUT_ERROR";
})(ErrorCodeType = exports.ErrorCodeType || (exports.ErrorCodeType = {}));
/* eslint-enable @typescript-eslint/naming-convention */
//# sourceMappingURL=enum.js.map