import mongoose,{Schema} from "mongoose"
import bcrypt from 'bcrypt'
import  jwt from 'jsonwebtoken'
const userSchema=new mongoose.Schema({
name:{
    type:String,
    required:true,
    
},
email:{
    type:String,
    required:true,
    unique:true
    
},
password:{
    type:String,
    required:true,
    
},


},{timestamps:true})
mongoose.models={}


userSchema.pre( 'save', async function save(next) {
if(!this.isModified('password')) return next()

return this.password=await bcrypt.hash(this.password,10)



})
userSchema.methods.comparePassword =async function comparePassword(password){
return bcrypt.compare(password,this.password)
}
userSchema.methods.generateAccessToken=async function(){
    return jwt.sign(
        {
            _id:this._id,
            name:this.name,
            email:this.email
        } , 
        process.env.ACCESS_TOKEN_SECRET,
        {
    
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        })
    
    }
export default mongoose.model("User",userSchema)