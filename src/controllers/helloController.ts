import type { Request, Response, NextFunction } from "express"
import { AppError } from "../middleware/errorHandler"

export const getHello = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({ message: "Hello, World!" })
  } catch (error) {
    next(new AppError("Error in getHello", 500))
  }
}

export const postHello = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body
    res.json({ message: `Hello, ${name}!` })
  } catch (error) {
    next(new AppError("Error in postHello", 500))
  }
}

export const getHtmlContent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Express TypeScript API</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; }
          h1 { color: #0066cc; }
          p { margin-bottom: 10px; }
        </style>
      </head>
      <body>
        <h1>Welcome to Express TypeScript API</h1>
        <p>This is a simple HTML page rendered by our Express server.</p>
        <p>Current time: ${new Date().toLocaleString()}</p>
      </body>
      </html>
    `

    res.setHeader("Content-Type", "text/html")
    res.send(html)
  } catch (error) {
    next(new AppError("Error in getHtmlContent", 500))
  }
}

