const AdminRouter = require("express").Router();
const { isString } = require("nested-object-validate");
const getAllAgent = require("../controller/Agent/getAllAgent");
const addBalance = require("../controller/account/balance");
const setrate = require("../controller/account/setrate");
const getStatus = require("../controller/account/status");
const isAdmin = require("../middleware/Auth/isAdmin");
const validateBody = require("../middleware/validator/validateBody");

AdminRouter.get("/get-all-agent", isAdmin, getAllAgent);
AdminRouter.get("/get-status", isAdmin, getStatus);
AdminRouter.post(
  "/add-balance",
  isAdmin,
  validateBody([isString("id"), isString("balance")]),
  addBalance
);
AdminRouter.post(
  "/setrate",
  isAdmin,
  validateBody([isString("id"), isString("rate")]),
  setrate
);

module.exports = AdminRouter;
