const Agent = require("../../model/Agent");
const bcript = require("bcrypt");

const registration = async (req, res, next) => {
  try {
    const queryEmail = await Agent.findOne({ email: req.body.email });

    if (queryEmail.length > 0) {
      return res.status(400).json({
        message: "email already exist!",
        code: "email-exist",
      });
    }

    await Agent.Add({
      name: req.body.name,
      email: req.body.email,
      nid_no: req.body.nid_no,
      phone: req.body.phone,
      password: "",
      photo: "no-photo.png",
      admin: "pending",
      status: 0,
      rate: "pending",
    });

    res.status(201).json({ success: true });
  } catch (error) {
    next(error);
  }
};

module.exports = registration;
