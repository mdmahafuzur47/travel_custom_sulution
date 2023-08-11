const express = require('express');
const MainRouter = express.Router();
// route 
const TempRouter = require('./temp');
const AuthRoute = require('./auth');




MainRouter.use('/api/auth',AuthRoute);

MainRouter.use('/temp',TempRouter);

module.exports = MainRouter;