const express = require('express');
const MainRouter = express.Router();
// route 
const TempRouter = require('./temp');
const AuthRoute = require('./auth');
const LOIRoute = require('./LOI');


MainRouter.use('/api/auth',AuthRoute);
MainRouter.use('/temp',TempRouter);
MainRouter.use('/api/loi',LOIRoute)

module.exports = MainRouter;