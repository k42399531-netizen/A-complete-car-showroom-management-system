// teleport the tool
const cars = require('../model/cars.js')
//get all cars 
exports.get = async(req,res) =>{
try{
    const allcars = await cars.find();
    res.status(200).json(allcars)
} 
catch(error){
    console.log('the error is'+ error);
    res.status(400).json({message:"Error! please try again"});
}
}

//post car 
exports.post = async(req,res) =>{
    try{
       let newCar = new cars({
        brand:req.body.brand,
        model:req.body.model,
        year:req.body.year,
        price:req.body.price,
        license_plate:req.body.license_plate})
        await newCar.save()
        return res.status(200).json({
            message:"succees",
            car:newCar
        })
    }

    catch(error){
        console.log('the error is'+ error);
    res.status(400).json({message:"Error! please try again"});
    }
}

//put car

exports.put = async(req,res) =>{
    try{
        const id = req.params.id;
    const updatecars = await cars.findByIdAndUpdate(
       id,
       {
       brand:req.body.brand,
        model:req.body.model,
        year:req.body.year,
        price:req.body.price,
        license_plate:req.body.license_plate
     } , { new: true }
    )
    if(!updatecars){
        return res.status(400).json({message:"the car not found"});
    }
    return res.status(200).json({message:"the car is successfully", updatecars});
    }
    catch(error){
    console.log('the error is'+ error);
    res.status(400).json({message:"Error! please try again"});
    }
}


//delete car
exports.delete = async(req,res) =>{
    try{
     const id = req.params.id;
     const deletecar =await  cars.findByIdAndDelete(id);
     if(!deletecar){
        res.status(400).json({message:"the car not found"});    
     }   
     return res.status(200).json({message:"succees" })
    }
    catch(error){
      console.log('the error is'+ error);
    res.status(400).json({message:"Error! please try again"});
    }
}