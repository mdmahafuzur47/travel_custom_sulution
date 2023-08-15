const puppeteer = require("puppeteer");
const path = require('path');

const Pdf_Gen = async (url,id,name,type)=>{
    try {
        const browser = await puppeteer.launch({
            headless:"newd"
        });
        const page = await browser.newPage();
        const loaddata = await page.gotoc(url,{
            waitUntil:"networkidle2"
        });
        const namefile =  `${type}-${id}-${name}.pdf`
        await page.setViewport({ width: 2480, height: 3508 });

       const pdfn = await page.pdf({
            path:`${path.join(__dirname,'./pdf/') + namefile}`,
            format:"A4",
        })
    
        await browser.close();

        console.log("🚀 ~ file: GenaratePDF.js:24 ~ constPdf_Gen= ~ namefile:", namefile)
        return namefile
    } catch (error) {
        console.log("🚀 ~ file: Pdf_gen.js:23 ~ constPdf_Gen= ~ error:", JSON.parse(error))
        throw error
    }
}

module.exports = Pdf_Gen;