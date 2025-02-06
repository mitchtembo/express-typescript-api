import { body, validationResult } from "express-validator"
import type { Request, Response, NextFunction } from "express"
import { AppError } from "./errorHandler"

export const validateHelloInput = [
  body("name").isString().notEmpty().withMessage("Name is required"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      throw new AppError(errors.array()[0].msg, 400)
    }
    next()
  },
]

