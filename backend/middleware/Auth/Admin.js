const  AuthAdmin =  async (req,res,next)=>{
    req.Admin={
        name:"demo"
    }
    next()
}
module.exports = AuthAdmin;