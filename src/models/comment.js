import mongoose from "mongoose";
const commentSchema= new mongoose.Schema({
    //post
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
    },
    //author
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    //content
    content:{
        type:String,
        required:true,
    }
    //timestamps
},{timestamps:true})

//comment
const Comment= mongoose.model("Comment",commentSchema)
export default Comment
