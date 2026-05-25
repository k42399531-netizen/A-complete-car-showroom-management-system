//teleport the tool
const mongoose = require('mongoose');
//create Schema
const Schema = mongoose.Schema;
// create the new file
const usersSchema = new Schema({
    name:{type:String,required:true},
    phone:{type:String,unique:true},
    age:{type:Number},
    password:{type:String,required:true},
    acceesabilty:{type:String,enum:['user','admin'],default:'user'}
})
//export the model
module.exports = mongoose.model('Users',usersSchema);