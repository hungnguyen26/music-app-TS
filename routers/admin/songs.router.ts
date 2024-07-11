import { Router } from "express";
import multer from "multer"
import * as controller from "../../controllers/admin/songs.controller";

import { uploadSingle } from "../../middlewares/admin/uploadCloud.middleware";

const router: Router = Router();

const upload = multer();

router.get("/", controller.index );

router.get("/create", controller.create );

router.post("/create", upload.single("avatar"), uploadSingle, controller.createPost );




export const songRouter: Router =  router;
