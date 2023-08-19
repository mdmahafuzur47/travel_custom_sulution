const Agent = require("../../model/Agent");

function getNum(str, fallback = 0) {
  if (isNaN(parseFloat(str))) return fallback;
  return parseFloat(str);
}

async function SetRate(req, res) {
  try {
    const [agent] = await Agent.findById(req.body.id);

    if (!agent) {
      return res.status(404).json({
        message: "agent not found!",
        code: "404",
      });
    }

    const rate = getNum(req.body.rate);

    const dbRes = await Agent.findByIdAndUpdate(req.body.id, {
      rate,
    });



    res.json({ success: true });
  } catch (e) {
    console.log("add-balance", e);
    next(e);
  }
}

module.exports = SetRate;
