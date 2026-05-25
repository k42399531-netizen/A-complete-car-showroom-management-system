//teleport the tool
const mongoose = require('mongoose');
//create new Schema
const new_Schema = new mongoose.Schema({
       user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
       },
       car_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'cars',
        required:true
       },
       rent_date:{
          type:Date,
          default:Date.now 
       },
       return_date:{
        type: Date,
        required: true
       },
       total_price:{
        type:Number,
        required:true
       }

})

module.exports = mongoose.model('rentals', new_Schema);
