const AdminRouter = require("express").Router();
const getAllAgent = require("../controller/Agent/getAllAgent");
const addBalance = require("../controller/account/balance");
const getStatus = require("../controller/account/status");
const isAdmin = require("../middleware/Auth/isAdmin");

AdminRouter.get("/get-all-agent", isAdmin, getAllAgent);
AdminRouter.get("/get-status", isAdmin, getStatus);
AdminRouter.post("/add-balance", isAdmin, addBalance);

module.exports = AdminRouter;
