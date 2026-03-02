const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    contact:{type:Number,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
})

const usermodel=mongoose.model("users",UserSchema)
module.exports=usermodel