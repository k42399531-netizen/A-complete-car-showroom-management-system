// teleport the tool
const mongoose = require('mongoose');
//create the schema
const Schema = mongoose.Schema;
//create new schema
const car_Schema = new Schema({
    brand:{type:String,required:true},
    model:{type:String,required:true},
    year:{type:Number,required:true},
    price:{type:Number,required:true},
    license_plate:{type:String,unique:true}
})
//export the model 
module.exports = mongoose.model('cars', car_Schema);