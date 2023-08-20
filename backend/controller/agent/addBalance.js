const BalanceReq = require("../../model/BalanceReq");

async function addBalance(req, res, next) {
  try {
    await BalanceReq.Add({
      agent_id: req.body.agent_id,
      transition_id: req.body.transition_id,
      amount: req.body.amount,
      message: req.body.message,
      status:"pending"
    });

    res.json({ success: true });
  } catch (e) {
    console.log("add-balance-agent", e);
    next(e);
  }
}

module.exports = addBalance;
