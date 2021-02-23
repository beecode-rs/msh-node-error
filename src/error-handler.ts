import { ErrorBase } from './error-base'
import { NextFunction, Request, Response } from 'express'

export const errorHandler = {
  expressMiddleware: (err: Error | ErrorBase, _req: Request, res: Response, _next: NextFunction): unknown => {
    const code = err instanceof ErrorBase ? err.HTTPErrorCode : 500
    return res.status(code).json({
      status: 'error',
      code,
      message: err.message,
    })
  },
}
