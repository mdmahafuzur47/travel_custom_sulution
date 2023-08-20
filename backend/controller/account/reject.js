const BalanceRequest = require("../../model/BalanceReq");

async function reject(req, res, next) {
  try {
    await BalanceRequest.findByIdAndUpdate(req.body.id, {
      status: "canceled",
    });

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = reject;
