function Logout(req, res) {
  res.clearCookie("offer");
  res.clearCookie("sort");
  res.json({ success: true });
}

module.exports = Logout;
