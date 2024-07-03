import {Request , Response} from "express";
import Topic from "../../models/topics.model";
import Song from "../../models/songs.model";
import Singer from "../../models/singer.model";

// [GET] /songs/:slugTopic
export const songs = async (req: Request, res: Response)=>{
    const topic = await Topic.findOne({
        slug: req.params.slugTopic,
        deleted:false,
        status:"active"
    })

    const songs = await Song.find({
        topicId: topic.id,
        deleted:false,
        status:"active"
    }).select("avatar title slug singerId like")

    for (const song of songs) {
        const infoSinger = await Singer.findOne({
            _id: song.singerId,
            deleted:false,
            status:"active"
        })
        song["infoSinger"] = infoSinger;
    }
    res.render("client/pages/songs/list.pug",{
        pageTitle: topic.title,
        songs:songs
    });
}