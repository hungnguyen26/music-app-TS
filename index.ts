import express,{ Express } from "express";
import * as database from "./config/database";
import dotenv from "dotenv";

import clientRouter from "./routers/client/index.router";
import adminRouter from "./routers/admin/index.router";
import { systemConfig } from "./config/config";
import path from "path";
import bodyParser from "body-parser";

dotenv.config();

database.connect();

const app: Express = express();
const port: number | String = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));

app.set("views","./views");
app.set("view engine","pug");

// tinymce
app.use("/tinymce",express.static(path.join(__dirname,"node_modules", "tinymce")));
//end  tinymce

// TẠO BIẾN TOÀN CỤC
app.locals.prefixAdmin = systemConfig.prefixAdmin;

//client router
clientRouter(app);

//admin router
adminRouter(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
