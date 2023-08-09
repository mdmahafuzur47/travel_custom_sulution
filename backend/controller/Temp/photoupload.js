const UploadTempPhoto = async (req,res)=>{
 console.log(req.files);
const response = {
    passpor:{
        name:req.files.imgpasport[0].filename
    },
    visa:{
        name:req.files.imgvisa[0].filename
    }
}
    console.log("🚀 ~ file: photoupload.js:11 ~ UploadTempPhoto ~ response:", response)
    res.send({
        ...response
    })

}

module.exports = UploadTempPhoto;