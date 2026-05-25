//teleport the tool
const express = require('express');
const mongoose = require('mongoose');
const dtnev = require('dotenv').config();
const APIs = require('./router/APIs.cjs');
// create the server
const app = express();
app.use(express.json());
const url = process.env.MONGO_URI;
// connect the data
const connect_database = async() =>{
    try{
        mongoose.set('strictQuery',false);
        await mongoose.connect(url);
        console.log('success')
    }
    catch(error){
        await  console.log('error! please try again'+error);
    }
}
connect_database();
app.use(APIs);
//start the server
app.listen(8085,() =>{
    console.log('the server is true');
})





