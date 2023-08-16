const path = require("path");
const axios = require('axios');
const fs = require('fs');

const Pdf_Gen = async (url, id, name, type) => {
  try {
    const namefile = `${type}-${id}-${name}.pdf`;

    const fileRes = await axios.post('https://urltopdf-9pii.onrender.com/gen',{
        url:url
    },{
        responseType: 'arraybuffer'
    })
    fs.writeFileSync(path.join(__dirname,'./pdf',namefile),fileRes.data);
    console.log('fiele write')
    const Buffer = namefile; 
    return Buffer;
  } catch (error) {
    // console.error(error)
    return false
  }
};

module.exports = Pdf_Gen;
