import Post from "../models/post.js";


const createPost=async(req,res)=>{
    try {
        const {caption,imageUrl}=req.body;

        const newPost=await Post.create({
            caption,
            author:req.user._id,
            imageUrl,
        })
        res.status(201).json({message:"Post created successfully",post:newPost})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:"Internal server error"})
    }
}

const getSinglePost=async(req,res)=>{
try {
    const {postId}=req.params
    const posts=await Post.findById(postId)
    
    if(!posts){
        return res.status(404).json({message:"Post not found"})
    }
    res.status(200).json({message:"Post fetched successfully",post:posts})
} catch (error) {
        console.log(error.message)
        res.status(500).json({message:"Internal server error"})
}
}

const deletePost=async(req,res)=>{
try {
    const postId=req.params.id;
    const post=await Post.findById(postId)
    if(!post){
        return res.status(404).json({message:"Post not found"})
    }
    if(String(post.author)!==String(req.user._id)){
        return res.status(403).json({message:"You are not authorized to delete this post"})
    }
    await Post.findByIdAndDelete(postId)


} catch (error) {
}
}

export {createPost,getSinglePost,}