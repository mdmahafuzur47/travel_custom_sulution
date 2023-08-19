const Agent = require("../../model/Agent");
const bcrypt = require("bcrypt");

async function changePassword(req, res, next) {
  try {
    if (!bcrypt.compareSync(req.body["current-password"], req.AGENT.password)) {
      return res.status(400).json({
        message: "Email and password not match!",
        code: "invalid-password",
      });
    }

    await Agent.findByIdAndUpdate(req.AGENT.id, {
      password: bcrypt.hashSync(req.body.password),
    });

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = changePassword;
