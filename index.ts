import express,{ Express } from "express";
import * as database from "./config/database";
import dotenv from "dotenv";

import clientRouter from "./routers/client/index.router";

dotenv.config();

database.connect();

const app: Express = express();
const port: number | String = process.env.PORT || 3000;

app.set("views","./views");
app.set("view engine","pug");

//client router
clientRouter(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
