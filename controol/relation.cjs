//teleport the tool

const relation = require('../model/relation.js');
const carModel = require('../model/cars.js');
//funcion 
exports.createrental = async(req,res) =>{
    try{
        const user_id = req.user._id;
        const car_id =  req.body.car_id;
        const return_date =  req.body.return_date;
        const car = await carModel.findById(car_id);
        if(!car){
            res.status(400).json({message:"not found"})
        }
        const price = car.price;
        const rentDate = new Date();
        const total_price =Math.ceil( (new Date(return_date)-rentDate) / (1000*60*60*24) * price)
        const Newrlation = new relation({
            user_id:user_id,
            car_id : car_id,
            return_date: return_date,
            total_price: total_price
        })
        await Newrlation.save();

        res.status(200).json({
    message: "success 🚗🎉",
    rentalDetails: Newrlation
});
    }
    catch(error){
        console.log(error)
        res.status(400).json({message:"error"})
    }
}
