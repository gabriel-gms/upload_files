import { Router } from "express"
import * as uploadController from "../controllers/upload.js"

const router = Router()

router.post('/upload', uploadController.upload)

export default router