import { Router } from "express"
import * as uploadController from "../controllers/upload.js"
import * as multer from "../middlewares/multer.js"

const router = Router()

router.post('/upload', multer.upload.single("arquivo"), uploadController.upload)

export default router