const jwt = require("jsonwebtoken");
const Admin = require("../../model/Admin");

function decode(token) {
  try {
    return jwt.decode(token, process.env.JWTT);
  } catch {
    return null;
  }
}

const AuthAdmin = async (req, res, next) => {
  const admin = decode(req.cookies.sort);

  if (admin) {
    const dbAdmin = (await Admin.findOne({ id: admin.id }))[0];

    if (dbAdmin && dbAdmin.status !== 0) {
      req.ADMIN = admin;
      return next();
    }
  }

  res.status(401).json({
    message: "You don't have access permission!",
    code: "unauthorize",
  });
};

module.exports = AuthAdmin;
