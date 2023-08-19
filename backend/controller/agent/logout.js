const cookie = require('cookie')


function Logout(req, res) {
console.log('start');
  try {
    res.setHeader(
      "Set-Cookie",
      [cookie.serialize("offer", "", {
        maxAge: 1,
        sameSite: "strict",
        path: "/",
        httpOnly: true,
      }),cookie.serialize("sort", "", {
        maxAge: 1,
        sameSite: "strict",
        path: "/",
        httpOnly: true,
      })]
    );
    
    res.send("logout");
  } catch (error) {
    console.log("🚀 ~ file: logout.js:28 ~ Logout ~ error:", error)
    
  }
  
}

module.exports = Logout;
