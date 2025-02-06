import type { Request, Response, NextFunction } from "express"
import logger from "../utils/logger"

export class AppError extends Error {
  statusCode: number

  constructor(message: string, statusCode: number) {
    super(message)
    this.statusCode = statusCode
  }
}

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    logger.error(`${err.statusCode} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`)
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    })
  }

  logger.error(`500 - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`)
  return res.status(500).json({
    status: "error",
    message: "Internal Server Error",
  })
}

