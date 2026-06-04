//teleport the tool
const users = require('../data/users.js');
const bcrypt = require('bcrypt');
const AppError = require('../Error handing/AppErorr');
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config({path:'./data/.env'});
//register
exports.register = async(req,res,next) =>{
    try{
        const user_name = await users.findOne({name:req.body.name});//search the name user
        if(user_name){//if user not found 
            return next(new AppError(400,'This user already exists, try another name.'))
        }
        const encryption = await bcrypt.genSalt(13);//put the system encryption
        const encryption_password = await bcrypt.hash(req.body.password,encryption)//encryption password
        let new_user = new users({ //enter the new data
           name:req.body.name,
           age:req.body.age,
           phone:req.body.phone,
           password:encryption_password,
           type:req.body.type
        })
        await new_user.save()//save the data user
        res.status(200).json({  //show the success message
            status: 'success',
            message: 'User registered successfully'
        })
    }
    catch(err){
        next(err)// show the error
    }
}
//login
exports.login = async(req,res,next) =>{
    try{
        let user = await users.findOne({name:req.body.name});//search the user
        if(!user){//if cannot to search password
            return next(new AppError(401,'not found please enter the correct name'));    
        }
        const password = await bcrypt.compare(req.body.password , user.password);//compain userispassword encryption password
      if (!password){ //uf password is wrong
        return next(new AppError(401,'the password is not correct'));   
      }
      const token = jwt.sign({_id:user._id},process.env.jwt_secret,{expiresIn:'30d'});
      return res.status(200).json({
        message:"success",
        token:token
      })//show the success message
    }
    catch(err){
        next(err)//show the errror
    }
}