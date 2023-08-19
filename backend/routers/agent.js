const express = require("express");
const registration = require("../controller/Agent/registration");
const approve = require("../controller/Agent/approve");
const validateBody = require("../middleware/validator/validateBody");
const { isString } = require("nested-object-validate");
const Login = require("../controller/Agent/login");
const AgentRoute = express.Router();
const isAdmin = require("../middleware/Auth/isAdmin");
const getInfo = require("../controller/Agent/info");

AgentRoute.post(
  "/reg",
  validateBody([
    isString("name"),
    isString("nid_no"),
    isString("email"),
    isString("phone"),
  ]),
  registration
);

AgentRoute.post(
  "/login",
  validateBody([isString("password"), isString("email")]),
  Login
);

AgentRoute.post("/approve", isAdmin, approve);
AgentRoute.get("/info", getInfo);

module.exports = AgentRoute;
