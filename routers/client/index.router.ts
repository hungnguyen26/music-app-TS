import { Express } from "express";
import { topicRouter } from "./topic.router";
import { songsRouter } from "./songs.router";


const clientRouter = (app: Express): void => {

  app.use("/topics" ,topicRouter);

  app.use("/songs" ,songsRouter);

};

export default clientRouter;
