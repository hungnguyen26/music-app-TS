import mongoose from "mongoose";

const favoritesongSchema = new mongoose.Schema(
    {
        userId:String,
        songId:String,
        deleted:{
            type: Boolean,
            default: false,
        },
        deletedAt: Date,
    },
    {
        timestamps:true,
    }
);

const FavoriteSong = mongoose.model("FavoriteSong", favoritesongSchema,"favorite-songs");

export default FavoriteSong;
