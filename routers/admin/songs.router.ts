import { Router } from "express";
import multer from "multer";
import * as controller from "../../controllers/admin/songs.controller";

import { uploadFields, uploadSingle } from "../../middlewares/admin/uploadCloud.middleware";

const router: Router = Router();

const upload = multer();

router.get("/", controller.index);

router.get("/create", controller.create);

router.post(
  "/create",
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "audio", maxCount: 1 },
  ]),
  uploadFields,
  controller.createPost
);

router.get("/edit/:idSong", controller.edit);

router.patch(
  "/edit/:idSong",
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "audio", maxCount: 1 },
  ]),
  uploadFields,
  controller.editPatch
);


export const songRouter: Router = router;
