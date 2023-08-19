const Agent = require("../../model/Agent");
const jwt = require("jsonwebtoken");

function verify(token) {
  try {
    return jwt.verify(token, process.env.JWTT);
  } catch {
    return null;
  }
}

async function isAgent(req, res, next) {
  try {
    const agt = verify(req.cookies.offer);

    if (agt === null) {
      return res.status(401).json({
        message: "token is not valid",
        code: "unauthorize",
      });
    }

    const [dbAgtRes] = await Agent.findById(agt.id);

    if (!dbAgtRes) {
      return res.status(401).json({
        message: "token is not valid",
        code: "unauthorize",
      });
    }

    req.AGENT = dbAgtRes;
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = isAgent;
