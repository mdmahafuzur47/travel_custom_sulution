const path = require("path"); 
const fs = require('fs');
const LOI = require("../../model/LOI");


const LOIEntry = async (req, res, next) => {
    try {
    if(!req.body.datas){
        throw{
            message: "not auth token!",
            instanceof: "error",
        }
    }


  let reqfrom = null;


  if (req.User.Admin) {
    reqfrom = {
      type: "Admin",
      data: req.User.Admin,
    };
  }

  if (req.User.Agent) {
    reqfrom = {
      type: "Agent",
      data: req.User.Agent,
    };
  }

  if (!reqfrom) {
    throw {
      message: "not auth token!",
      instanceof: "not auth",
    };
  }

  if (reqfrom.type === "Agent") {
    // chack agent balence
  }

  const fileList = req.body?.datas?.map((e)=>{
    return [
        e.passportPhoto,
        e.visaPhoto,
        e.hotelbooking,
        e.ticket
    ]
  }).flat(Infinity).filter((e)=> e !== null).filter((item,
    index,arr) => arr.indexOf(item) === index);


  
  let err =  fileList.map((element) => {
    const oldPath = path.join(__dirname,'../../upload/temp',element);
    const newPath = path.join(__dirname,"../../upload/loireqfile",element)
    try {
        let res = fs.renameSync( oldPath, newPath)
        return false
    } catch (error) {
        return {
            // err:error,
            path:element
        }
    }
  }).filter(e => e);
 
  console.log(req.body);

//   veryfy 
// TODO: veryfy the data 
 


const BODY = req.body;

BODY.forEach(e => {
    
});
const resdb = await LOI.Add({
    guest_name:req.body?.datas?.guestName,
    pasport_number:req.body?.datas.passportNumber,
    travel_date:req.body?.datas.travelDate,
    hotel_name:req.body?.datas.hotelName,
    reference
})




//     reference:{
//         type:'text(255)',
//         req:true
//     },
//     price:{
//         type:'text(255)',
//         req:true
//     },
//     pasport_copy:{
//         type:"text(255)",
//         req:true,
//     },
//     visa_copy:{
//         type:"text(255)",
//         req:true,
//     },
//     hotel_copy:{
//         type:"text(255)",
//         req:true,
//     },
//     tiket_copy:{
//         type:"text(255)",
//         req:true,
//     },
//     iternary:{
//         type:"LONGTEXT",
//         req:true,

  res.send("ok");

  } catch (error) {
    console.log("🚀 ~ file: LOIentry.js:5 ~ LOIEntry ~ error:", error);
    // next(error);
  }
};

module.exports = LOIEntry;
