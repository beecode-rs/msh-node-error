import { NodeErrorBase } from './node-error-base';
import { NextFunction, Request, Response } from 'express';
export declare const errorHandler: {
    expressMiddleware: (err: Error | NodeErrorBase, _req: Request, res: Response, _next: NextFunction) => unknown;
};
//# sourceMappingURL=error-handler.d.ts.map