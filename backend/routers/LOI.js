const express = require("express");
const LOIRoute = express.Router();
const LOIEntry = require("../controller/LOI/LOIentry");
const LOIacsses = require("../middleware/Auth/LOIacsses");
const GetAll = require("../controller/LOI/getall");
const Approved = require("../controller/LOI/Approve");
const CancelController = require("../controller/LOI/Cancel");
const validateBody = require("../middleware/validator/validateBody");
const { isString } = require("nested-object-validate");

LOIRoute.post("/entry", LOIacsses, LOIEntry);
LOIRoute.get("/getall", LOIacsses, GetAll);
LOIRoute.post("/approved", LOIacsses, Approved);
LOIRoute.post(
  "/cancel",
  LOIacsses,
  validateBody([isString("reference")]),
  CancelController
);

module.exports = LOIRoute;
