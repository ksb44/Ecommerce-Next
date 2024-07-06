import User from "@/models/User"

export default async function handler(req, res) {
    const {name,email,password } = req.body; 

    if (req.method === 'POST') {
         try {
           if(!name || !email || !password){
     
               return res.status(400).send({status:false,msg:"Please fill all fields!"})
           }
           let  user= await User.findOne({ email });
           
           if(user) return res.status(400).json({status:false,msg:"Email already in use"});
           let newuser =await User.create({name,email,password})
           let returnUser= await  User.findById(newuser._id).select('-password')
            res.status(200).json({ status:true,returnUser });
         } catch (error) {
            res.status(400).json({status:false, error });

         }
    } else {
        res.status(400).json({ message: "Method not supported!" });
    }
}
