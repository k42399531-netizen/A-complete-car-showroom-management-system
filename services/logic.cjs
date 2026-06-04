//teleport the tool
const rentals = require('../data/relation');
const {AppError} = require('../Error handing/export');
const cars = require('../data/cars')
//to forbid more to two cars
exports.forbid_twocars = async(user) =>{
    const rentalcurrant = await rentals.countDocuments({user_id:user}) //calaucter cars to user
    if (rentalcurrant >=2){
        throw new AppError(400,'you have two cars') //show the message to user
    }
}
// Discounts
const apply_discount = (price) =>{
    let date = new Date().getDate()
    if (date == 15 ){
        return  price * 0.9 //return product with dicount
    }
    return price //return the product without discount
}

// function with total price
exports.totalprice = (days,price) =>{
    let num_days = Number(days);//transform days to number
    let num_price = Number(price);//transform price to number
    let total =Number( num_days * num_price ) // calacter to toatl price
    let final_price = apply_discount(total)
    return final_price    
}

// function with rental cars
exports.rentalcars = async(rentalID,carID) =>{
    const updateRental = await rentals.findByIdAndUpdate(
       rentalID,{
        status:'completed',
        return_date : new Date()
       } ,
       {new:true}
    )//update datacars and rental cars
    if(!updateRental){ //if cars not found
        throw new AppError(400,'not found the rental car')
    }
    await cars.findByIdAndUpdate(carID,{isBooked:false})//update data cars 
    return updateRental
}

