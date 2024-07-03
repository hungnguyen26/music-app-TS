import { Router } from "express";
import * as controller from "../../controllers/client/songs.controller";

const router: Router = Router();


router.get("/:slugTopic", controller.songs );


export const songsRouter: Router =  router;
