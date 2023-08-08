const multer = require("multer");
const path = require("path");
const destination = path.join(__dirname,'../upload/temp');
// import { v4 as uuidv4 } from 'uuid';

const storageEngine = multer.diskStorage({
    destination: destination,
    filename: (req, file, cb) => {
      console.log("🚀 ~ file: PhotoUploader.js:9 ~ req: header", req.headers)
      
      cb(null, `${Date.now()}--${file.originalname}`);
    },
  });

  const checkFileType = function (file, cb) {
    //Allowed file extensions
    const fileTypes = /jpeg|jpg|pdf/;
  
    //check extension names
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  
    const mimeType = fileTypes.test(file.mimetype);
  
    if (mimeType && extName) {
      return cb(null, true);
    } else {
      cb("Error: You can Only Upload Images or Pdf!!");
    }
  };

  const upload = multer({
    storage: storageEngine,
    // limit file to 5 mb 
    limits: { fileSize: 10000000 * 5 },
    fileFilter: (req, file, cb) => {
      console.log("🚀 ~ file: PhotoUploader.js:36 ~ req:", req.body)
      checkFileType(file, cb);
    },
  });

  module.exports = upload;