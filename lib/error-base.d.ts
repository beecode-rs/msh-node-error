import { ErrorCodeType } from './enum';
export declare class ErrorBase extends Error {
    private readonly __errorCode;
    get ErrorCode(): ErrorCodeType;
    get HTTPErrorCode(): number;
    get ErrorTypeName(): string;
    constructor(errorCode: ErrorCodeType, message?: string);
    protected _replaceUnderscores(withUnderscores: string): string;
}
//# sourceMappingURL=error-base.d.ts.map