const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    Firstname:{
        type:String,
        required:true
    },
    Lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phonenumber:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    activationCode:{
        type:String,
        default:null
    },
    activate:{
        type:Boolean,
        default:false
    }

   
})
const UserModel=mongoose.model('user',userSchema)
module.exports=UserModel