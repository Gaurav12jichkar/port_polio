const express = require("express")
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require("../db/conn")

const User = require("../model/userSchema")
router.get('/', (req, res) => {
  res.send('Hello World router!')
})

// router.post('/register',(req,res)=>{

//     //console.log(req.body);
//    const {name,email,phone,work,password,cpassword}=req.body;
//    if(!name||!email ||!phone || !work ||!password ||!cpassword){
//     return  res.status(401).json({message:"please enter all the fields"
//    })}
//      User.findOne({email:email}).then((userExist)=>{
//         if(userExist){
//           return  res.status(401).json({massage:"user already exist"})
//         }
//      })
//       const user= new User({name,email,phone,work,password,cpassword})
//       user.save().then(()=>{
//         res.status(201).json({massage:"user register successfully"}).catch((err)=>{
//             res.status(500).json({error:"failed to register"})
//         })
//       }).catch((err=>{console.log(err)}))
//import following line
//res.json({massage:req.body})


//async await

router.post('/register', async (req, res) => {

  //console.log(req.body);
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(401).json({ message: "please enter all the fields" })
  }
  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(401).json({ massage: "user already exist" })
    } else if (password != cpassword) {
      return res.status(401).json({ massage: "invalid password" })
    } else {
      const user = new User({ name, email, phone, work, password, cpassword })

      await user.save();
      res.status(201).json({ massage: "user register successfully" })
    }

  } catch (error) {
    console.log(error)
  }

});

//login route

router.post('/signin', async (req, res) => {
  try {
    
    const {email,password } = req.body;
    if (!email || !password) {
      return res.status(422).json({ error: "pls fill all data" })
    }
    const UserLogin = await User.findOne({ email: email });
    //console.log(UserLogin);
    if (UserLogin) {
      const isMatch = await bcrypt.compare(password, UserLogin.password)
      
      token = await UserLogin.genrateAutoToken();
      console.log(token)
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 2589200000000),
        httpOnly: true
      });
      if (!isMatch) {
        res.status(400).json({ error: "user invalidpass" })
      }
      else {
        res.json({ massage: "user signin succesfully" })
      }
    }
    else {
      res.status(400).json({ error: "user invalid " })
    }

  } catch (error) {
    console.log(error)
  }
})
module.exports = router;