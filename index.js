//teleport the tool
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const {fetching_Error} = require('./Error handing/export')
const themainRouter = require('./router/router.js')
//create the server
const app = express();
app.use(express.json());
dotenv.config({path:'./data/.env'});
app.use('/',themainRouter)
const url = process.env.url;
//connect to the database
const connect_database = async() =>{
    try{
        mongoose.set('strictQuery',false);
        await mongoose.connect(url)
        console.log("success to connect")
    }
    catch(error){
        console.log('the error is '+error)
        process.exit(1)
    }
}
connect_database()
//fetching the error
app.use(fetching_Error);
//listen the server
app.listen(8085,() =>{
    console.log('success to start server')
});
