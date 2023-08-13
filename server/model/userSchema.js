const mongoose =require("mongoose")
const jwt=require('jsonwebtoken')
const bcrypt= require("bcryptjs")
 var userSchema=new mongoose.Schema({
    name:
    {
        type:String,
        required:[true,"Please enter your Name"]

    },
    email:{
        type: String, 
        required:true                          
    },
    phone:{
        type: Number, 
        required:true  
    },
    work:{
        type: String, 
        required:true   
    },
    password:{
        type: String, 
        required:true 
    },
    cpassword:{
        type: String, 
        required:true 
    },
    tokens:[{
        token:{
        type:String,
        require:true
        }
    }]
 });
 
 //we are hashing password
 userSchema.pre('save', async function (next) {
    //console.log("hi from inside");
  if(this.isModified('password')){
  this.password= await bcrypt.hash(this.password, 12);
  this.cpassword= await bcrypt.hash(this.cpassword, 12);
  }
  next();
  });
  //we are genrating  token
  userSchema.methods.genrateAutoToken= async function () {
    try {
        let token= jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens = await this.tokens.concat({token:token})
         await this.save(); 
         return token;
    } catch (error) {
        console.log(error)
    }
  }
  const User=mongoose.model('user',userSchema);
  module.exports=User;
 