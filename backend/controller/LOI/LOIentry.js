const LOIEntry = async (req,res,next)=>{
    let reqfrom = null;
    if(req.User.Admin){
        reqfrom = {
            type:"Admin",
            data:req.User.Admin
        }
    }

    if(req.User.Agent){
        reqfrom = {
            type:"Agent",
            data:req.User.Agent
        }
    }

    if(!reqfrom){
        throw {
            message: "not auth token!",
            instanceof: "not auth",
          };
    }

    



    console.log(req.body);
    console.log(req.User);

    res.send('ok')
    try {
        
    } catch (error) {
        console.log("🚀 ~ file: LOIentry.js:5 ~ LOIEntry ~ error:", error)
        next(error);
    }
}

module.exports = LOIEntry;