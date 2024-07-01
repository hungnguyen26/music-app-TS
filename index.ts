import express,{ Express , Request , Response} from "express";

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
