const LOI = require("../../model/LOI");
const PdfGenaret = require("../../GenaretePDF/GenaratePDF");
const SendMail = require("../../util/SendMail");
const path = require("path");

const prosses = async (req, res, element) => {
  var hostname = req.headers.host;
  var proto = req.protocol;
  const url = `${proto}://${hostname}/pdfgen/${element.id}`;
  const urlit = `${proto}://${hostname}/pdfgenitenary/${element.id}`;

  try {
    const letter = await PdfGenaret(
      url,
      element.id,
      element.guest_name,
      "letter"
    );
    const itenary = await PdfGenaret(
      urlit,
      element.id,
      element.guest_name,
      "itenary"
    );
    const updaet = await LOI.RayQuery(
      `UPDATE loi_data SET status = 'approved' WHERE loi_data.id = ${element.id};`
    );
    const SendMailres = await SendMail(
      ["nahidhasan141400@gmail.com"],
      [ "nahidhasan.opt@gmail.com"],
      `${element.guest_name}-${element.id}`,
      "loi req",
      "",
      [
        {
          filename: `${element.guest_name}-letter.pdf`,
          path: path.join(__dirname, "../../GenaretePDF/pdf", letter),
        },
        {
          filename: `${element.guest_name}- iternary.pdf`,
          path: path.join(__dirname, "../../GenaretePDF/pdf", itenary),
        },
      ]
    );
    console.log(
      "🚀 ~ file: Approve.js:20 ~ prosses ~ SendMailres:",
      SendMailres
    );

    if(SendMail.Error){
        throw SendMail.Error
    }
    return false;
  } catch (error) {
    return error;
  }
};

const approved = async (req, res, next) => {
  try {
    const { id } = req.body;
    if (!id) {
      throw {
        mesage: "id is required",
        instanceof: "loiapp",
      };
    }
    const [resdb] = await LOI.findAll();
    const [Guest] = resdb.filter((e) => e.id === id);
    const AllGuest = resdb.filter((e) => e.reference === Guest.reference);

    let dataresponse = await AllGuest.map(async (element) => {
      const opration = await prosses(req, res, element);
      return opration;
    });
    const datas = await Promise.all(dataresponse);

    const result = datas.filter((e) => e);
    if (result.length === 0) {
      return res.status(200).json({
        status: 200,
        message: "approved",
      });
    } else {
      throw {
        mesage: "some data not approved please chack email",
        instanceof: "loiapprove",
      };
    }
  } catch (error) {
    console.log("🚀 ~ file: Approve.js:60 ~ approved ~ error:", error);
    next(error);
  }
};
module.exports = approved;
