import {Request , Response} from "express";
import Topic from "../../models/topics.model";

// [GET] /admin/topics
export const index = async (req: Request, res: Response)=>{
    const topics = await Topic.find({
        deleted:false
    })

    console.log(topics);
    

    res.render("admin/pages/topics/index.pug",{
        pageTitle: 'Quản lí chủ đề',
        topics:topics
    });
}