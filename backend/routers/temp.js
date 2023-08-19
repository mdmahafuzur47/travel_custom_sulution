const express = require("express");
const TempRouter = express.Router();
const PhotoUploader = require("../controller/Temp/photoupload");

// auth import
const AdminAuth = require("../middleware/Auth/LOIacsses");
const UploadTempPhoto = require("../util/PhotoUploader");

TempRouter.post(
  "/guestlist/photoupload",
  AdminAuth,
  (req,res,next)=>{
    console.log(req.User);
    if(!req.User.Admin){
      if(!req.User. Agent){
        return res.status(401).send("Unauthorized");
      }
    }
    next()
  
  },
  UploadTempPhoto.fields([
    { name: "imgpasport", maxCount: 1 },
    { name: "imgvisa", maxCount: 1 },
    { name: "hotel", maxCount: 1 },
    { name: "ticket", maxCount: 1 },
  ]),
  PhotoUploader
);

module.exports = TempRouter;
