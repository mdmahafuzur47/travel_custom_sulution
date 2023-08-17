const express = require("express");
const LOIRoute = express.Router();
const LOIEntry = require("../controller/LOI/LOIentry");
const LOIacsses = require("../middleware/Auth/LOIacsses");
const GetAll = require("../controller/LOI/getall");
const Approved = require("../controller/LOI/Approve");
const CancelController = require("../controller/LOI/Cancel");

LOIRoute.post("/entry", LOIacsses, LOIEntry);
LOIRoute.get("/getall", LOIacsses, GetAll);
LOIRoute.post("/approved", LOIacsses, Approved);
LOIRoute.post("/cancel", LOIacsses, CancelController);

module.exports = LOIRoute;
