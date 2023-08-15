const LOI = require("../../model/LOI");

const GenaretLetter = async (req,res,next)=>{
    const id = req.params.id;
    try {
        const [serveres] = await LOI.getById(id);
        const [allData] = await LOI.findAll();

        const allguest = allData.filter((e)=>{
            
            return e.reference === serveres[0].reference;
        })
        res.render('table',{
            allData:allguest,
        })
    } catch (error) {
        
    }
}

module.exports = GenaretLetter;

