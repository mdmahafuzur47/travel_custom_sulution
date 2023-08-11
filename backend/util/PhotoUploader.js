const multer = require("multer");
const path = require("path");
const destination = path.join(__dirname,'../upload/temp');
const  uuidv4 = require('uuid').v4;

const storageEngine = multer.diskStorage({
    destination: destination,
    filename: (req, file, cb) => {
      let filename;
      const {name,passport} = req.headers;
      if(name && passport){
        filename = `${file.fieldname}-${name}-${passport}${(file.mimetype === 'application/pdf')?".pdf":".jpeg"}`
      }else{
        filename =  `${uuidv4()}${(file.mimetype === 'application/pdf')?".pdf":".jpeg"}`
      }
      
      cb(null, `${filename}`);
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
      cb({
        message: "You can Only Upload Images jpg,jpeg or Pdf!!",
        instanceof:"multer"
      });
    }
  };

  const upload = multer({
    storage: storageEngine,
    // limit file to 5 mb 
    limits: { fileSize: 10000000 * 5 },
    fileFilter: (req, file, cb) => {
      checkFileType(file, cb);
    },
  });

  module.exports = upload;