import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
    recipient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    //sender
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    //type
    type:{
        type:String,
        enum:["like","comment","follow"],
        required:true,
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
        },
    isRead:{
        type:Boolean,
        default:false,
    }
    
})

const Notification= mongoose.model("Notification",notificationSchema)
export default Notification;