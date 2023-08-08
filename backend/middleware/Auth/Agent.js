const  AuthAgent =  async (req,res,next)=>{
    req.Agent={
        name:"demo"
    }
    next()
}
module.exports = AuthAgent;