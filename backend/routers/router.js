const express = require('express');
const MainRouter = express.Router();
// route 
const TempRouter = require('./temp');
const AuthRoute = require('./auth');
const LOIRoute = require('./LOI');
const pdfgen = require("../controller/PDF/genaretLatter");



const Pdf_Gen = require('../GenaretePDF/GenaratePDF');

MainRouter.use('/pdfgen/:id',pdfgen)
MainRouter.get('/pdf',(req,res)=>{
    console.log(req.header("Auth"));
    Pdf_Gen('http://192.168.5.149:5000/pdfgen/18','18','nahdi',"letter")
    res.send('ok')
})

MainRouter.use('/api/auth',AuthRoute);
MainRouter.use('/temp',TempRouter);
MainRouter.use('/api/loi',LOIRoute)

module.exports = MainRouter;