import mongoose from "mongoose";
const postSchema= new mongoose.Schema({
    
    //caption
    caption:{
        type:String,
        trim:true,
        
        //author
//aurhor
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    //imageUrl
    
    imageUrl:{
        type:String,
        required:true,
    },
    //likes
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }],
   //timestamps

},{timestamps:true})

const Post=mongoose.model("Post",postSchema)
export default Post
