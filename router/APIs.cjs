//teleport the tool
const express = require('express')
const Router = express.Router();
const controol = require('../controol/controol.cjs')
const car = require('../controol/controolcars.cjs') 
const {IsAdmin} = require('../guardian.cjs')
const relation = require('../controol/relation.cjs')
//register
Router.post('/api/register', controol.register);
//login
Router.post('/api/login', controol.login);
// get all cars

Router.get('/api/getallcars',car.get);
//post all cars
Router.post('/api/postallcars',IsAdmin,car.post);
// put and update all cars 
Router.put('/api/putallcars/:id',IsAdmin,car.put);
// deleye all car 
Router.delete('/api/deletecars/:id',IsAdmin,car.delete);
// relation user with car 
Router.post('/api/rentcar',  relation.createrental);
// export the model
module.exports = Router;