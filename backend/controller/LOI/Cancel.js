const LOISchema = require("../../model/LOI");
const path = require("path");
const fs = require("fs");

async function CancelController(req, res, next) {
  try {
    const getRes = await LOISchema.find({ reference: req.body.reference });

    const upRes = await LOISchema.update({
      set: { status: "cancel" },
      where: { reference: req.body.reference },
    });

    if (upRes.affectedRows < 1) {
      return res.status(404).json({
        message: "Data not found",
        code: "loi-cancel",
      });
    }

    const paths = getRes
      .map((agents) => {
        return [
          agents.hotel_copy,
          agents.pasport_copy,
          agents.visa_copy,
          agents.tiket_copy,
        ].map((p) => path.join(__dirname, "../../upload/loireqfile", p));
      })
      .flat();

    for (const image of paths) {
      try {
        fs.unlinkSync(image);
      } catch (fsError) {
        if (fsError.code === "ENOENT") continue;
        return next(fsError);
      }
    }

    return res.json({ success: true });
  } catch (error) {
    next(error);
  }
}

module.exports = CancelController;
