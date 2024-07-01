import express,{ Express , Request , Response} from "express";
import * as database from "./config/database";
import dotenv from "dotenv";

dotenv.config();

database.connect();

const app: Express = express();
const port: number | String = process.env.PORT || 3000;

app.set("views","./views");
app.set("view engine","pug");

app.use("/topics",(req: Request, res: Response)=>{
    res.render("client/pages/topics/index.pug");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
