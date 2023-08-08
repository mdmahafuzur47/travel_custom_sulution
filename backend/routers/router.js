const express = require('express');
const MainRouter = express.Router();
// route 
const TempRouter = require('./temp');

MainRouter.get('/',(req,res)=>{
    res.send("new")
})

MainRouter.use('/temp',TempRouter);

module.exports = MainRouter;