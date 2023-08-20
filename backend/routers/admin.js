const AdminRouter = require("express").Router();
const { isString } = require("nested-object-validate");
const getAllAgent = require("../controller/Agent/getAllAgent");
const addBalance = require("../controller/account/balance");
const setrate = require("../controller/account/setrate");
const getStatus = require("../controller/account/status");
const isAdmin = require("../middleware/Auth/isAdmin");
const validateBody = require("../middleware/validator/validateBody");
const getBalanceRequests = require("../controller/account/getBalanceRequests");
const accept = require("../controller/account/accept");
const reject = require("../controller/account/reject");

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

AdminRouter.get("/get-balance-requests", isAdmin, getBalanceRequests);
AdminRouter.post("/accept", validateBody([isString("id")]), isAdmin, accept);
AdminRouter.post("/reject", validateBody([isString("id")]), reject);
// /api/admin/accept

module.exports = AdminRouter;
