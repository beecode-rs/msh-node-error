"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpResponseCodeMapper = void 0;
/* eslint-disable @typescript-eslint/naming-convention */
var HttpResponseCodeMapper;
(function (HttpResponseCodeMapper) {
    /*********************
     * 1×× Informational
     ********************/
    HttpResponseCodeMapper[HttpResponseCodeMapper["CONTINUE"] = 100] = "CONTINUE";
    HttpResponseCodeMapper[HttpResponseCodeMapper["SWITCHING_PROTOCOLS"] = 101] = "SWITCHING_PROTOCOLS";
    HttpResponseCodeMapper[HttpResponseCodeMapper["PROCESSING"] = 102] = "PROCESSING";
    /*********************
     * 2×× Success
     ********************/
    HttpResponseCodeMapper[HttpResponseCodeMapper["OK"] = 200] = "OK";
    HttpResponseCodeMapper[HttpResponseCodeMapper["CREATED"] = 201] = "CREATED";
    HttpResponseCodeMapper[HttpResponseCodeMapper["ACCEPTED"] = 202] = "ACCEPTED";
    HttpResponseCodeMapper[HttpResponseCodeMapper["NON__AUTHORITATIVE_INFORMATION"] = 203] = "NON__AUTHORITATIVE_INFORMATION";
    HttpResponseCodeMapper[HttpResponseCodeMapper["NO_CONTENT"] = 204] = "NO_CONTENT";
    HttpResponseCodeMapper[HttpResponseCodeMapper["RESET__CONTENT"] = 205] = "RESET__CONTENT";
    HttpResponseCodeMapper[HttpResponseCodeMapper["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
    HttpResponseCodeMapper[HttpResponseCodeMapper["MULTI__STATUS"] = 207] = "MULTI__STATUS";
    HttpResponseCodeMapper[HttpResponseCodeMapper["ALREADY_REPORTED"] = 208] = "ALREADY_REPORTED";
    HttpResponseCodeMapper[HttpResponseCodeMapper["IM_USED"] = 226] = "IM_USED";
    /*********************
     * 3×× Redirection
     ********************/
    HttpResponseCodeMapper[HttpResponseCodeMapper["MULTIPLE_CHOICES"] = 300] = "MULTIPLE_CHOICES";
    HttpResponseCodeMapper[HttpResponseCodeMapper["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
    HttpResponseCodeMapper[HttpResponseCodeMapper["FOUND"] = 302] = "FOUND";
    HttpResponseCodeMapper[HttpResponseCodeMapper["SEE_OTHER"] = 303] = "SEE_OTHER";
    HttpResponseCodeMapper[HttpResponseCodeMapper["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
    HttpResponseCodeMapper[HttpResponseCodeMapper["USE_PROXY"] = 305] = "USE_PROXY";
    HttpResponseCodeMapper[HttpResponseCodeMapper["TEMPORARY_REDIRECT"] = 307] = "TEMPORARY_REDIRECT";
    HttpResponseCodeMapper[HttpResponseCodeMapper["PERMANENT_REDIRECT"] = 308] = "PERMANENT_REDIRECT";
    /*********************
     * 4×× Client Error
     ********************/
    HttpResponseCodeMapper[HttpResponseCodeMapper["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpResponseCodeMapper[HttpResponseCodeMapper["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpResponseCodeMapper[HttpResponseCodeMapper["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
    HttpResponseCodeMapper[HttpResponseCodeMapper["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpResponseCodeMapper[HttpResponseCodeMapper["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpResponseCodeMapper[HttpResponseCodeMapper["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
    HttpResponseCodeMapper[HttpResponseCodeMapper["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
    HttpResponseCodeMapper[HttpResponseCodeMapper["PROXY_AUTHENTICATION_REQUIRED"] = 407] = "PROXY_AUTHENTICATION_REQUIRED";
    HttpResponseCodeMapper[HttpResponseCodeMapper["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
    HttpResponseCodeMapper[HttpResponseCodeMapper["CONFLICT"] = 409] = "CONFLICT";
    HttpResponseCodeMapper[HttpResponseCodeMapper["GONE"] = 410] = "GONE";
    HttpResponseCodeMapper[HttpResponseCodeMapper["LENGTH_REQUIRED"] = 411] = "LENGTH_REQUIRED";
    HttpResponseCodeMapper[HttpResponseCodeMapper["PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
    HttpResponseCodeMapper[HttpResponseCodeMapper["PAYLOAD_TOO_LARGE"] = 413] = "PAYLOAD_TOO_LARGE";
    HttpResponseCodeMapper[HttpResponseCodeMapper["REQUEST__URI_TOO_LONG"] = 414] = "REQUEST__URI_TOO_LONG";
    HttpResponseCodeMapper[HttpResponseCodeMapper["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
    HttpResponseCodeMapper[HttpResponseCodeMapper["REQUESTED_RANGE_NOT_SATISFIABLE"] = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE";
    HttpResponseCodeMapper[HttpResponseCodeMapper["EXPECTATION_FAILED"] = 417] = "EXPECTATION_FAILED";
    HttpResponseCodeMapper[HttpResponseCodeMapper["MISDIRECTED_REQUEST"] = 421] = "MISDIRECTED_REQUEST";
    HttpResponseCodeMapper[HttpResponseCodeMapper["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
    HttpResponseCodeMapper[HttpResponseCodeMapper["LOCKED"] = 423] = "LOCKED";
    HttpResponseCodeMapper[HttpResponseCodeMapper["FAILED_DEPENDENCY"] = 424] = "FAILED_DEPENDENCY";
    HttpResponseCodeMapper[HttpResponseCodeMapper["UPGRADE_REQUIRED"] = 426] = "UPGRADE_REQUIRED";
    HttpResponseCodeMapper[HttpResponseCodeMapper["PRECONDITION_REQUIRED"] = 428] = "PRECONDITION_REQUIRED";
    HttpResponseCodeMapper[HttpResponseCodeMapper["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
    HttpResponseCodeMapper[HttpResponseCodeMapper["REQUEST_HEADER_FIELDS_TOO_LARGE"] = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE";
    HttpResponseCodeMapper[HttpResponseCodeMapper["CONNECTION_CLOSED_WITHOUT_RESPONSE"] = 444] = "CONNECTION_CLOSED_WITHOUT_RESPONSE";
    HttpResponseCodeMapper[HttpResponseCodeMapper["UNAVAILABLE_FOR_LEGAL_REASONS"] = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS";
    HttpResponseCodeMapper[HttpResponseCodeMapper["CLIENT_CLOSED_REQUEST"] = 499] = "CLIENT_CLOSED_REQUEST";
    /*********************
     * 5×× Server Error
     ********************/
    HttpResponseCodeMapper[HttpResponseCodeMapper["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    HttpResponseCodeMapper[HttpResponseCodeMapper["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
    HttpResponseCodeMapper[HttpResponseCodeMapper["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
    HttpResponseCodeMapper[HttpResponseCodeMapper["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
    HttpResponseCodeMapper[HttpResponseCodeMapper["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
    HttpResponseCodeMapper[HttpResponseCodeMapper["HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
    HttpResponseCodeMapper[HttpResponseCodeMapper["VARIANT_ALSO_NEGOTIATES"] = 506] = "VARIANT_ALSO_NEGOTIATES";
    HttpResponseCodeMapper[HttpResponseCodeMapper["INSUFFICIENT_STORAGE"] = 507] = "INSUFFICIENT_STORAGE";
    HttpResponseCodeMapper[HttpResponseCodeMapper["LOOP_DETECTED"] = 508] = "LOOP_DETECTED";
    HttpResponseCodeMapper[HttpResponseCodeMapper["NOT_EXTENDED"] = 510] = "NOT_EXTENDED";
    HttpResponseCodeMapper[HttpResponseCodeMapper["NETWORK_AUTHENTICATION_REQUIRED"] = 511] = "NETWORK_AUTHENTICATION_REQUIRED";
    HttpResponseCodeMapper[HttpResponseCodeMapper["NETWORK_CONNECT_TIMEOUT_ERROR"] = 599] = "NETWORK_CONNECT_TIMEOUT_ERROR";
})(HttpResponseCodeMapper = exports.HttpResponseCodeMapper || (exports.HttpResponseCodeMapper = {}));
/* eslint-enable @typescript-eslint/naming-convention */
//# sourceMappingURL=http-response-code.js.map