const LOI = require("../../model/LOI");

const GenaretLetter = async (req,res,next)=>{
    const id = req.params.id;
    try {
        const [serveres] = await LOI.getById(id);
        // console.log("🚀 ~ file: genaretLatter.js:7 ~ GenaretLetter ~ serveres:", serveres)
        res.render('latter',{
            name:serveres[0].guest_name,
            passport :serveres[0].pasport_number
        })
    } catch (error) {
        // console.log("🚀 ~ file: genaretLatter.js:5 ~ GenaretLetter ~ error:", error.m)
        res.status(404).send("not page")
    }
}

module.exports = GenaretLetter;

