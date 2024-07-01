import express,{ Express , Request , Response} from "express";

const app: Express = express();
const port: number | String = process.env.PORT || 3000;

app.use("/topics",(req: Request, res: Response)=>{
    res.send("Chủ đề bài hát");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
