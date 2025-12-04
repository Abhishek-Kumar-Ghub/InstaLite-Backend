import jwt from 'jsonwebtoken'
import User from '../models/use.jsr'


const verifyToken=async(req,res,next)=>{
    try {
        const token=req.headers.authorization
        const decode=jwt.verify(token,process.env.JWT_SECRET_KEY)
        req.user=await User.findById(decode.id).select("-password")
        if(!req.user){
            return res.status(401).json({message:"user not found"})
        }
        next();

    } catch (error) {
        return res.status(401).json({message:"invalid token"})
        
    }
}
export default verifyToken;