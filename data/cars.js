//teleport the tool
const mongoose = require('mongoose');
//create new file 
const Schema = mongoose.Schema;
// enter rhe data
const data_cars = new Schema ({
  brand:{type:String,required:true},
  model:{type:String,required:true},
  year:{type:Number},
  price:{type:Number},
  license_part:{type:String,required:true,unique:true},
  isBooked:{type:Boolean,default: false }
})    
//export the model 
module.exports = mongoose.model('cars',data_cars)
