import User from "../models/user.js";

const getUserProfile=async(req,res)=>{
try {
    const {username}=req.params
    const user=await User.findOne({username}).select("-password").populate("followers","username").populate("following","username")
    if(!user){
        return res.status(404).json({message:"user not found"})
    }
return res.status(200).json({
message:"this user is fetched successfully",user
})
} catch (error) {
    console.log(error.message)
    res.status(500).json({message:error.message})
}
}
const updateUserProfile=async(req,res)=>{
    try {
        const{name,bio,username}=req.body;
        const updateUser=await User.findByIdAndUpdate(req.user._id,{name,bio,username},{new:true})
        res.status(200).json({message:"user profile is updated successfully",updateUser})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
}
const followUser=async(req,res)=>{
    try {
        const currentUserId=req.user._id
        const targetUserId=req.params._id

        if(String(currentUserId)===String(targetUserId)){
            return res.status(400).json({message:"you cannot follow yourself"})
        }
        const currentUser=await User.findById(currentUserId)
        const targetUser=await User.findById(targetUserId)
        if(!targetUser){
            return res.status(404).json({message:" user not found"})
        }
        if(targetUser.followers.includes(req.user._id)){
            return res.status(400).json({message:"you are already following this user"})
        }
        targetUser.followers.push(userId)
        currentUser.following.push(targetUserId)

        await targetUser.save();
        await currentUser.save();

        await craeteNotification({
            recipient:targetUser._id,
            sender:currentUser._id,
            type:"follow",
        })  

        res.status(200).json({message:"user followed successfully"})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
}

const unfollowUser=async(req,res)=>{
    try {
        const currentUserId=req.user._id
        const targetUserId=req.params._id       
        if(String(currentUserId)===String(targetUserId)){
            return res.status(400).json({message:"you cannot unfollow yourself"})
        }
        const currentUser=await User.findById(currentUserId)
        const targetUser=await User.findById(targetUserId)
        if(!targetUser){
            return res.status(404).json({message:" user not found"})
        }   
        if(!targetUser.followers.includes(req.user._id)){
            return res.status(400).json({message:"you are not following this user"})
        }   
        targetUser.followers.pop(currentUserId)
        currentUser.following.pop(targetUserId)

        await targetUser.save();
        await currentUser.save();

        await createNotification({
            recipient:targetUser._id,
            sender:currentUser._id,
            type:"unfollow",
        })
        res.status(200).json({message:"user unfollowed successfully"})
    } catch (error) 
    {
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
}   
export {getUserProfile,updateUserProfile,followUser,unfollowUser}