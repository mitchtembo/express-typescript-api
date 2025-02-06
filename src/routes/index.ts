import express from "express"
import { getHello, postHello, getHtmlContent } from "../controllers/helloController"
import { validateHelloInput } from "../middleware/validators"
import { getLandingPage } from "../controllers/landingController"

export const router = express.Router()

router.get("/hello", getHello)
router.post("/hello", validateHelloInput, postHello)
router.get("/render", getHtmlContent)
router.get("/", getLandingPage)

router.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" })
})

