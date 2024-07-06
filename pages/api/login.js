import User from "@/models/User"
import cookieParser from "cookie-parser";

import connectDB from "@/databases";
connectDB()
export default async function handler(req, res) {
    const {email,password } = req.body; 

    if (req.method === 'POST') {
         try {
           if(!email || !password){
     
               return res.status(400).send({status:false,msg:"Please fill all fields!"})
           }
           let user= await User.findOne({ email });

           if (!user) {
            return res.status(401).json({status:false,msg:"Not a valid email"})
           }

           let isPasswordMatched=await user.comparePassword(password);

           if(!isPasswordMatched){
            return res.status(401).json({status:false,msg:"Invalid Password"})
 
           }
           const accessToken=await user.generateAccessToken();
           const options={
               httpOnly:true,
               secure:true
           }
           const returnUser=await User.findById(user._id).select('-password');
           return res.status(200)
       //    .cookie("access_token", accessToken ,options)
           .json( {status:true,returnUser,accessToken})
         } catch (error) {
            res.status(400).json({status:false, error });

         }
    } else {
        res.status(400).json({ message: "Method not supported!" });
    }
}
