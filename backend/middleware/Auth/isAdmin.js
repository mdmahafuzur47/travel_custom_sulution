const jwt = require("jsonwebtoken");
const Admin = require("../../model/Admin");

const AuthAdmin = async (req, res, next) => {
  const { sort } = req.cookies;

  const admin = jwt.decode(sort);

  const dbAdmin = (await Admin.findOne({ id: admin.id }))[0];

  if (dbAdmin && dbAdmin.status !== 0) {
    req.ADMIN = admin;
    return next();
  }

  res.status(401).json({
    message: "You don't have access permission!",
    code: "unauthorize",
  });
};

module.exports = AuthAdmin;
