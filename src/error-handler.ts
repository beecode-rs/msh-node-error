import { NodeErrorBase } from './node-error-base'
import { NextFunction, Request, Response } from 'express'

export const errorHandler = {
  expressMiddleware: (err: Error | NodeErrorBase, _req: Request, res: Response, _next: NextFunction): unknown => {
    const code = (err as any).httpCode ?? 500
    return res.status(code).json({
      status: 'error',
      code,
      message: err.message,
    })
  },
}
