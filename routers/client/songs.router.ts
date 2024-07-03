import { Router } from "express";
import * as controller from "../../controllers/client/songs.controller";

const router: Router = Router();


router.get("/:slugTopic", controller.songs );

router.get("/detail/:slugSong", controller.detail );

router.patch("/like/:typeLike/:idSong", controller.like );


export const songsRouter: Router =  router;
