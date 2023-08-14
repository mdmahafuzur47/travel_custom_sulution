const LOI = require('../../model/LOI');
const PdfGenaret = require('../../GenaretePDF/GenaratePDF');

const approved = async (req,res,next)=>{
    try {
        const {id} = req.body;
        if(!id){
            throw {
                mesage: "id is required",
                instanceof:"loiapp"
            }
        }
        const [resdb] =await LOI.findAll();
        const [Guest] = resdb.filter((e)=> e.id === id);
        const AllGuest = resdb.filter((e)=> e.reference === Guest.reference);
        var hostname = req.headers.host;
        var proto = req.protocol;
        let data = await AllGuest.forEach((element) => {
            
            const url = `${proto}://${hostname}/pdfgen/${element.id}`

            // genarate
                  const name =  PdfGenaret(url,element.id,element.guest_name,'letter')
                  name.then(e=>{
                    console.log(e)
                    const updaet = LOI.RayQuery(`UPDATE loi_data SET status = 'approved' WHERE loi_data.id = ${element.id};`)
                    updaet.then(e=>{
                       // send mail 
                    }).catch(e=>{
                        return e
                    })
                   
                  }).catch(e=> e)
                //   console.log("🚀 ~ file: Approve.js:24 ~ AllGuest.forEach ~ name:", name)
            // update 

            // mail 
        });
        console.log(data);

        // TODO: make promice 
        
// res.send('ok')
        
    } catch (error) {
        console.log("🚀 ~ file: Approve.js:30 ~ approved ~ error:", error)
        
    }
}
module.exports =approved;