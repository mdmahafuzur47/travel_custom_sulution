const express = require('express');
const AuthRoute = express.Router();
const Login = require('../controller/Auth/Login'); 

AuthRoute.post('/login',Login);



module.exports = AuthRoute;