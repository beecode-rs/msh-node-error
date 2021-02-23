import { ErrorBase } from './error-base';
import { NextFunction, Request, Response } from 'express';
export declare const errorHandler: {
    expressMiddleware: (err: Error | ErrorBase, _req: Request, res: Response, _next: NextFunction) => unknown;
};
//# sourceMappingURL=error-handler.d.ts.map