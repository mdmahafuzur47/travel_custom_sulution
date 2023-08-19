const express = require("express");
const registration = require("../controller/Agent/registration");
const approve = require("../controller/Agent/approve");
const validateBody = require("../middleware/validator/validateBody");
const { isString, isNumber } = require("nested-object-validate");
const Login = require("../controller/Agent/login");
const AgentRoute = express.Router();
const isAdmin = require("../middleware/Auth/isAdmin");
const getInfo = require("../controller/Agent/info");
const isAgent = require("../middleware/Auth/isAgent");
const addBalance = require("../controller/Agent/addBalance");
const changePassword = require("../controller/Agent/changePassword");

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

AgentRoute.post(
  "/change-password",
  isAgent,
  validateBody([isString("password"), isString("current-password")]),
  changePassword
);

AgentRoute.post(
  "/add-balance",
  validateBody([
    isString("transition_id"),
    isNumber("agent_id"),
    isNumber("amount"),
  ]),
  addBalance
);

AgentRoute.post("/approve", isAdmin, validateBody(["id"]), approve);
AgentRoute.get("/info", getInfo);

module.exports = AgentRoute;
