const LOISchema = require("../../model/LOI");
const path = require("path");
const fs = require("fs");

async function CancelController(req, res, next) {
  try {
    const dbRes = await LOISchema.RayQuery(
      `UPDATE loi_data SET status='cancel' WHERE id=${req.body.id}`
    );

    if (dbRes.affectedRows < 1) {
      return res
        .status(404)
        .json({ message: "Data not found", code: "loi-cancel" });
    }

    const [agents] = await LOISchema.getById(req.body.id);

    const paths = [
      agents[0].hotel_copy,
      agents[0].pasport_copy,
      agents[0].visa_copy,
      agents[0].tiket_copy,
    ].map((p) => path.join(__dirname, "../../upload/loireqfile", p));

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
