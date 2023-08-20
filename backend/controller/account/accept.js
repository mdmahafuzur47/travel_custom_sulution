const BalanceRequest = require("../../model/BalanceReq");
const Agent = require("../../model/Agent");

function getNum(str, fallback = 0) {
  if (isNaN(parseFloat(str))) return fallback;
  return parseFloat(str);
}

async function accept(req, res, next) {
  try {
    const [balRes] = await BalanceRequest.findById(req.body.id);

    if (!balRes || (balRes && balRes.status === "submitted")) {
      return res.status(404).json({
        message: "balance request already accepted!",
        code: "already-done",
      });
    }

    const [agtRes] = await Agent.findById(balRes.agent_id);

    if (!agtRes) {
      return res.status(404).json({
        message: "Balance request agent not found!",
        code: "not-found-agent",
      });
    }

    await Agent.findByIdAndUpdate(balRes.agent_id, {
      balance: getNum(agtRes.balance) + getNum(balRes.amount),
    });

    await BalanceRequest.findByIdAndUpdate(req.body.id, {
      status: "submitted",
    });

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = accept;
