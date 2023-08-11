const UploadTempPhoto = async (req,res)=>{



const response = {
    passpor:{
        name:req.files?.imgpasport[0]?.filename
    },
    visa:{
        name:req.files?.imgvisa? req.files?.imgvisa[0]?.filename : null
    }
}
    res.send({
        ...response
    })

}

module.exports = UploadTempPhoto;