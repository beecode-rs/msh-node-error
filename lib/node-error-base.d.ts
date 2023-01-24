import { HttpResponseCodeMapper } from './http-response-code';
export declare type NodeErrorPayload = {
    [k: string]: any;
};
export declare class NodeErrorBase<T extends NodeErrorPayload = any> extends Error {
    httpCode: number;
    name: string;
    payload?: T;
    constructor(params: {
        httpCode: number | HttpResponseCodeMapper;
        name?: string;
        message?: string;
        payload?: T;
    });
}
export declare const nodeErrorBase: <T extends NodeErrorPayload = any>(params: {
    httpCode: number | HttpResponseCodeMapper;
    name?: string | undefined;
    message?: string | undefined;
    payload?: T | undefined;
}) => NodeErrorBase<T>;
//# sourceMappingURL=node-error-base.d.ts.map