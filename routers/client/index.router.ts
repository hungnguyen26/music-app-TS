import { Express } from "express";
import { topicRouter } from "./topic.router";
import { songsRouter } from "./songs.router";
import { favoriteSongRouter } from "./favorite-songs.router";
import { searchRouter } from "./search.roter";
import { homeRouter } from "./home.roter";


const clientRouter = (app: Express): void => {

  app.use("/" ,homeRouter);

  app.use("/topics" ,topicRouter);

  app.use("/songs" ,songsRouter);

  app.use("/favorite-songs" ,favoriteSongRouter);

  app.use("/search" ,searchRouter);

};

export default clientRouter;
