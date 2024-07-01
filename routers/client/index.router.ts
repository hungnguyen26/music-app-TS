import { Express } from "express";
import { topicRouter } from "./topic.router";


const clientRouter = (app: Express): void => {

  app.use("/topics" ,topicRouter);

};

export default clientRouter;
