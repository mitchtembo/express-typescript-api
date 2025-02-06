import express from "express"
import helmet from "helmet"
import cors from "cors"
import { router } from "./routes/index"
import config from "./config"
import logger from "./utils/logger"
import { errorHandler } from "./middleware/errorHandler"

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())


app.use("/api", router)

app.use(errorHandler)

app.listen(config.port, () => {
  logger.info(`Server is running on port ${config.port}`)
})

export default app

