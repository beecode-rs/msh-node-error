import { HttpResponseCodeMapper } from './http-response-code';
import { NodeErrorBase, NodeErrorPayload } from './node-error-base';
export declare const _errorHOF: (httpCode: HttpResponseCodeMapper) => {
    <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
    <T_1 extends NodeErrorPayload = any>(params?: {
        name?: string | undefined;
        message?: string | undefined;
        payload?: T_1 | undefined;
    } | undefined): NodeErrorBase;
};
export declare const nodeError: {
    client: {
        badRequest: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
        unauthorized: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
        paymentRequired: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
        forbidden: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
        notFound: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
        methodNotAllowed: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
        notAcceptable: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
        proxyAuthenticationRequired: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
        requestTimeout: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
        conflict: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
        gone: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
        lengthRequired: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
        preconditionFailed: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
        payloadTooLarge: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
        requestUriTooLong: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
        unsupportedMediaType: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
        requestedRangeNotSatisfiable: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
        expectationFailed: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
        misdirectedRequest: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
        unprocessableEntity: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
        locked: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
        failedDependency: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
        upgradeRequired: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
        preconditionRequired: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
        tooManyRequests: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
        requestHeaderFieldsTooLarge: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
        connectionClosedWithoutResponse: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
        unavailableForLegalReasons: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
        clientClosedRequest: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
    };
    server: {
        internalServerError: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
        notImplemented: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
        badGateway: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
        serviceUnavailable: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
        gatewayTimeout: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
        httpVersionNotSupported: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
        variantAlsoNegotiates: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
        insufficientStorage: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
        loopDetected: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
        notExtended: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
        networkAuthenticationRequired: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
        networkConnectTimeoutError: {
            <T extends NodeErrorPayload = any>(message?: string | undefined, payload?: T | undefined): NodeErrorBase;
            <T_1 extends NodeErrorPayload = any>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): NodeErrorBase;
        };
    };
};
//# sourceMappingURL=node-error.d.ts.map