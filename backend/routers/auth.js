const express = require('express');
const AuthRoute = express.Router();
const Login = require('../controller/Auth/Login'); 
const Info = require('../controller/Auth/Info');

AuthRoute.post('/login',Login);
AuthRoute.get('/info',Info);



module.exports = AuthRoute;