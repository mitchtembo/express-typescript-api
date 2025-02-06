import dotenv from "dotenv"

dotenv.config()

const config = {
  nodeEnv: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  logLevel: process.env.LOG_LEVEL || "info",
}

export default config

