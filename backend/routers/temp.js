const express = require('express');
const TempRouter = express.Router();
const PhotoUploader = require('../controller/Temp/photoupload');

// auth import 
const AdminAuth = require('../middleware/Auth/Admin');
const AgentAuth = require('../middleware/Auth/Agent');
const UploadTempPhoto = require('../util/PhotoUploader');


TempRouter.post('/guestlist/photoupload',AdminAuth,
    UploadTempPhoto.fields([{name:'imgpasport',maxCount:1},{name:"imgvisa",maxCount:1}]),PhotoUploader)

module.exports = TempRouter;