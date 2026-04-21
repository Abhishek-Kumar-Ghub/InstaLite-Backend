import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    //username
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    //name
    name:{
        type: String,
        required: true,
        trim: true,
    },
    //emails
    email:{
        type: String,
        required:true,
        trim: true,
        unique: true,
    },
    //passwords
    password:{
        type:String,
        required: true,
    },
    //bio
    bio:{
        type:String,
        required:true,
        trim:true,
    },
    //followers
    followers:[{
         type:mongoose.Schema.Types.ObjectId,
         ref:"User"
    } 
    ],
    following:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
},{timestamps:true})

const User= mongoose.model("User",userSchema)
export default User;
