//teleport the tool
const mongoose = require('mongoose');
//create the new folder
const Schema = mongoose.Schema;
//enter a data
const data_users = new Schema({
    name:{type:String,required:true,unique:true},
    age:{type:Number},
    phone:{type:Number,required:true,unique:true},
    password:{type:String,required:true},
    type:{type:String},
    accessbility:{type:String,enum:['user','admin']}

})
//export the model
module.exports = mongoose.model('users',data_users)