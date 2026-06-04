//teleport the tool
const cars = require('../data/cars.js')
const {AppError} = require('../Error handing/export.js');
// getallcars
exports.get = async(req,res,next) =>{
    try{
        const allcars = await cars.find();//show the all cars
        res.status(200).json(allcars); //show the all cars to users
    }
    catch(err){
        next(err)//show the errors
    } 
} 
//postallcars
exports.post = async(req,res,next) =>{
    try{
        let newcar = new cars({ //create the new car
            brand:req.body.brand,
            model:req.body.model,
            year:req.body.year,
            price:req.body.price,
            license_part:req.body.license_part
        })
        await newcar.save() //save the bew car
        return res.status(200).json({ //show the reponse to user
            message:"succees",
            car:newcar
        })
    }
    catch(err){
        next(err) //show the errorr
    }
}
//putallcars
exports.put = async(req,res,next) =>{
    try{
        const id = req.params.id; //save the id
        const updatecars = await cars.findByIdAndUpdate(
            id,// search and update cars toid
        {
        brand:req.body.brand,
        model:req.body.model,
        year:req.body.year,
        price:req.body.price,
        license_plate:req.body.license_part
     } , { new: true }
        )
        if(!updatecars){//if not found cars
            return next(new AppError(400,'the car not found please try again'))
        }
         return res.status(200).json({message:"the car is successfully", updatecars});//show the response to user
    }
    catch(err){
       next(err) //show the cars
    }
}
//deleteallcars
exports.delete = async(req,res,next)=>{
    try{
        const id = req.params.id;//save the id
        const deletecars = await cars.findByIdAndDelete(id);//search and delete cars with id
        if(!deletecars){ //if cars not found
            return next(new AppError(400,'the car not found please try again'))
        }
        return res.status(200).json({message:"succees" })//show the response to user
    }   
    catch(err){
        next(err)//show the error
    }
}
//searchallcars
exports.search = async(req,res,next) =>{
    try{
        const {brand} = req.query; //save the brand
        const searchCars = await cars.find({// search to the cars
            brand:{$regex:brand , $options:'i'}
        })
        res.status(200).json({ //show the response to user
            status: "success",
            results: searchCars.length,
            data: searchCars
        });
    }
    catch(err){
        next(err) //show the error
    }
}


