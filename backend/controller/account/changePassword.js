const Admin = require("../../model/Admin");
const bcrypt = require("bcrypt");
const cookie = require("cookie");

async function changePassword(req, res, next) {
  try {
    if (!bcrypt.compareSync(req.body["current-password"], req.ADMIN.password)) {
      return res.status(400).json({
        message: "Email and password not match!",
        code: "invalid-password",
      });
    }

    await Admin.findByIdAndUpdate(req.ADMIN.id, {
      password: bcrypt.hashSync(req.body.password, 10),
    });

    res.setHeader("Set-Cookie", [
      cookie.serialize("offer", "", {
        maxAge: 1,
        sameSite: "strict",
        path: "/",
        httpOnly: true,
      }),
      cookie.serialize("sort", "", {
        maxAge: 1,
        sameSite: "strict",
        path: "/",
        httpOnly: true,
      }),
    ]);

    res.json({ success: true });
  } catch (error) {
    next(error);
  }
}

module.exports = changePassword;
