//teleport the tool
const express = require('express')
const Router = express.Router();
const users = require('../controols/loginandregister.cjs');
const cars = require('../controols/Apiscars.cjs');
const {IsAdmin} = require('../permissions/permissions.cjs')
const rentalController = require('../controols/rental.cjs'); // تأكد من المسار الصحيح لملفك

//connect the pathes
//register
Router.post('/api/register', users.register);
//login
Router.post('/api/login', users.login);
//------------------------------------
// getallcars
Router.get('/api/getallcars',cars.get);
//postallcars 
Router.post('/api/postallcars',IsAdmin,cars.post);
// put and update all cars 
Router.put('/api/putallcars/:id',IsAdmin,cars.put);
// delete all car 
Router.delete('/api/deletecars/:id',IsAdmin,cars.delete);

Router.post('/api/calculate', rentalController.calculateRental);
//EXport the model 
module.exports = Router;