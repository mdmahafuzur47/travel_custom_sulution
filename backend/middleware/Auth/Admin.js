var jwt = require('jsonwebtoken');

const  AuthAdmin =  async (req,res,next)=>{
     const {sort} = req.cookies;
    req.Admin={
        name:"demo"
    }
    next()
}
module.exports = AuthAdmin;