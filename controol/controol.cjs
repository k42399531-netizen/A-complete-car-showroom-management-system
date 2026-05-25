//teleport the tool
const users = require('../model/users.js')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

// register
exports.register = async(req,res) =>{
    try{
        const phone = await users.findOne({phone:req.body.phone})
        if(phone){
            return res.status(400).json({message:"the phone is already registered"})
        }
        const bcrypto = await bcrypt.genSalt(10); // رقم 10 أسرع وكافي جداً للتأمين
        const password = await bcrypt.hash(req.body.password , bcrypto);
        let newUser = new users({
            name:req.body.name,
            phone:req.body.phone,
            age:req.body.age,
            password:password
        })
        await newUser.save()
        return res.status(201).json({message:"succees to create account"});
    }
    catch(error){
        console.log('the error is' + error)
        return res.status(500).json({message:"error please try again"});
    }
}

// login
exports.login = async(req,res)=>{
   try{
     let user = await users.findOne({phone:req.body.phone});
      if(!user){
         return res.status(401).json({message:"error please try again"})
        }
     const password = await bcrypt.compare(req.body.password, user.password);
     if(!password){
        return res.status(401).json({message:"error please try again"});
     }
     const token = jwt.sign({_id:user._id},process.env.JWT_SECRET)
     return res.status(200).json({message:"succees",token:token});  
   }
   catch(error){
        console.log('the error is' + error)
        return res.status(500).json({message:"error please try again"});
   }
}