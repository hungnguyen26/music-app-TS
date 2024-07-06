import { Express } from "express";
import { topicRouter } from "./topic.router";
import { songsRouter } from "./songs.router";
import { favoriteSongRouter } from "./favorite-songs.router";


const clientRouter = (app: Express): void => {

  app.use("/topics" ,topicRouter);

  app.use("/songs" ,songsRouter);

  app.use("/favorite-songs" ,favoriteSongRouter);

};

export default clientRouter;
