const jwt = require("jsonwebtoken");
const Admin = require("../../model/Admin");
const LOIacsses = async (req, res, next) => {
  try {
    const { sort } = req.cookies;
    //   res.send('ok')
    //  return console.log("🚀 ~ file: LOIacsses.js:6 ~ LOIacsses ~ sort:", sort)
    let AdminDecode = null;
    let AgentDecoded = null;

    if (sort) {
      try {
        const decode = jwt.verify(sort, process.env.JWTT);
        AdminDecode = decode;
      } catch (error) {}
      const [adminIndDB] = await Admin.findAll();

      const [mainAdmin] = adminIndDB.filter((e) => {
        return e.email === AdminDecode.email;
      });

      if (mainAdmin) {
        AdminDecode = mainAdmin;
      }
    }else{
      
      console.log("🚀 ~ file: LOIacsses.js:27 ~ LOIacsses ~ l:", 'cart not')
      return res.send('no cart')
    }
    

    req.User = {
      Admin: AdminDecode,
      Agent: AgentDecoded,
    };
    next();
  } catch (error) {
    console.log("🚀 ~ file: LOIacsses.js:40 ~ LOIacsses ~ error:", error);
  }
};

module.exports = LOIacsses;
