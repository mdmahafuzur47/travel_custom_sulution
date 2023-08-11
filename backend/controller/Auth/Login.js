const Admin = require("../../model/Admin");
const bcript = require("bcrypt");
var jwt = require('jsonwebtoken');
const cookie = require("cookie");

const Login = async (req, res, next) => {
  try {
    const [admindata] = await Admin.findAll();
    if (admindata.length === 0) {
      throw {
        message: "unauthorised request !",
        instanceof: "unauthorised login",
      };
    }
    const { email, password } = req.body;
    const [REQ_Admin] = admindata.filter((e) => {
      return e.email == email;
    });

    if (!REQ_Admin) {
      throw {
        message: "unauthorised request !",
        instanceof: "unauthorised login",
      };
    }

    const compayer = bcript.compareSync(password, REQ_Admin.password);

    if (!compayer) {
      throw {
        message: "unverified request !",
        instanceof: "unauthorised login",
      };
    }

    const token =await jwt.sign({
        user:REQ_Admin.username,
        email:REQ_Admin.email,
        phone:REQ_Admin.photo,
        id:REQ_Admin.id,
    },process.env.JWTT,{
        expiresIn:"1d"
    });
    
    res.setHeader("Set-Cookie",cookie.serialize("sort",token,{
        maxAge:  1 * 24 * 60 * 60,
        sameSite: "strict",
        path: "/"
    }))

    res.send("you are good to go");
  } catch (error) {
    // console.log("🚀 ~ file: Login.js:48 ~ Login ~ error:", error)
    next(error);
  }
};

module.exports = Login;
