import {Request , Response} from "express";
import Song from "../../models/songs.model";
import Singer from "../../models/singer.model";
import { convertToSlug } from "../../helpers/convertStringSlug";

// [GET] /search/result
export const result = async (req: Request, res: Response)=>{
    const key: string = `${req.query.key}`;

    let newSongs = [];
    if(key){
        const keyRegex = new RegExp(key, "i");
        
        // tạo ra slug không dấu, có thêm dấu - ngăn cách
        const stringSlug = convertToSlug(key);
        const stringSlugRegex = new RegExp(stringSlug, "i");
        

        const songs = await Song.find({
            $or: [
                {   title: keyRegex },
                {   slug: stringSlugRegex },
            ]
        });
        for (const item of songs) {
            const infoSinger =  await Singer.findOne({
                _id: item.singerId
            });
            item["infoSinger"] = infoSinger;
        }
        newSongs = songs;
    }

    res.render("client/pages/search/result.pug",{
        pageTitle: `Kết quả: ${key}`,
        key:key,
        songs:newSongs
    });
}