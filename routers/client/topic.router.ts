import { Router , Request , Response} from "express";
import Topic from "../../models/topics.model";
const router: Router = Router();


router.get("/", async (req: Request, res: Response)=>{
    const topics = await Topic.find({
        deleted:false
    });
    console.log(topics);
    
    res.render("client/pages/topics/index.pug");
});


export const topicRouter: Router =  router;
