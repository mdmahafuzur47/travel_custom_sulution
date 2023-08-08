const express = require('express');
const TempRouter = express.Router();

// auth import 
const AdminAuth = require('../middleware/Auth/Admin');
const AgentAuth = require('../middleware/Auth/Agent');
const UploadTempPhoto = require('../util/PhotoUploader');


TempRouter.post('/guestlist/photoupload',AdminAuth,
    UploadTempPhoto.single('img'),
    (req,res) => {
    	return res.send(req.file)
		
	
})

module.exports = TempRouter;