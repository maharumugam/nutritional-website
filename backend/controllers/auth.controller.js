const UserModel=require('../models/user-model')
const {v4:uuid4}=require('uuid')
const bcrypt=require('bcryptjs')
const nodemailer=require('nodemailer')
exports.signup=async(req,res)=>{
    // const{Firstname,Lastname,email,phonenumber,password}=req.body
    // let user=await UserModel.findOne({email})
    // if(user){
    //     return res.status(400).json({message:'EMail already requested'})
    // }
    // const activationCode=uuid4()
    // const salt=await bcrypt.genSalt(10)
    // const hashpassword=await bcrypt.hash(password,salt)
    const user=new UserModel(req.body)
    await user.save()
    res.status(200).json({message:'Data stored'})
    // const transport=nodemailer.createTransport({
    //     host:'smtp.gmail.com',
    //     port:587,
    //     auth:{
    //         user:process.env.EMAIL_USER,
    //         user:process.env.EMAIL_PASS
    //     }
    // })

    // const activationLink=`http://localhost:${process.env.PORT}/auth/activate/${activationCode}`
    // const mailOptions={
    //     form:process.env.EMAIL_USER,
    //     to:email,
    //     subject:"please verify your email address",
    //     text:`click the below link${activationLink}`
    // }

    // transport.sendMail(mailOptions,(err,info)=>{
    //     if(err){
    //         return res.status(500).json({message:'cannot send link'})
    //     }
    //     else{
    //         return res.status(200).json({message:' send link'})
    //     }
    // })

    // exports.activate=async(req,res)=>{
    //     const {activationCode}=req.params
    //     let user=await UserModel.findOne({activationCode})
    //     if(!user){
    //         res.status(500).json({message:"cannot sent activation link"})
    //     }
    //     user.activate=true
    //     user.save()
    //     res.status(200).json({message:' Activated'})
    // }

}
exports.signin=async(req,res)=>{
    const{email,password}=req.body
    let user=await UserModel.findOne({email})
    if(!user){
        return res.status(400).json({message:"Email not found"})
    }
    // const isMatching=await bcrypt.compare(password,user.password)
    if(password===user.password){
        return res.status(200).json({message:"Login successful",
    user})
        
    }
    return res.status(400).json({message:"Incorrect password"})
    // if(!user.isActivated){
    //     return res.status(400).json({message:"Account not yet activated please activate first to login"})
    // }
    
}