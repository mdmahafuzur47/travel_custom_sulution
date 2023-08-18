const express = require("express");
const registration = require("../controller/Agent/registration");
const validateBody = require("../middleware/validator/validateBody");
const { isString } = require("nested-object-validate");
const Login = require("../controller/Agent/login");
const AgentRoute = express.Router();

AgentRoute.post("/login");
AgentRoute.get("/info");
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

module.exports = AgentRoute;
