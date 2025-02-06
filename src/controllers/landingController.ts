import { Request, Response } from "express"

export const getLandingPage = (req: Request, res: Response) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>API Documentation</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
                line-height: 1.6;
            }
            .endpoint {
                background: #f4f4f4;
                padding: 15px;
                margin: 10px 0;
                border-radius: 5px;
            }
        </style>
    </head>
    <body>
        <h1>API Documentation</h1>
        <div class="endpoint">
            <h2>GET /api/hello</h2>
            <p>Returns a hello message</p>
        </div>
        <div class="endpoint">
            <h2>POST /api/hello</h2>
            <p>Accepts a name and returns a personalized greeting</p>
        </div>
        <div class="endpoint">

            <h2>GET /render</h2>
            <p>Returns HTML content</p>
        </div>
        <div class="endpoint">
            <h2>GET /api/health</h2>
            <p>Health check endpoint</p>
        </div>
    </body>
    </html>
  `
  res.send(html)
} 