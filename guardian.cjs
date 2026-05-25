//teleport the tool
const jwt = require("jsonwebtoken");
const users = require("./model/users.js");
// function
exports.IsAdmin = async(req,res,next) =>{
    try{
        const token = req.headers.authorization;
        if(!token){
            return res.status(400).json({message:"not availiable"});
        }
        const decade = jwt.verify(token,process.env.JWT_SECRET);
        const user = await users.findById(decade._id);
        if(!user){
            return res.status(400).json({message:"not found"});
        }
        if (user.acceesabilty !== 'admin'){
            return res.status(400).json({message:"Access denied! Admins only"});
        }
        req.user = user;
        next()
    }
    catch(error){
        console.log("❌ خطأ الحارس الفعلي هو:", error);
        res.status(400).json({message:"Error please try again "})
    }
}