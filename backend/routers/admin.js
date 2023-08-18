const AdminRouter = require("express").Router();
const getAllAgent = require("../controller/Agent/getAllAgent");
const isAdmin = require("../middleware/Auth/isAdmin");

AdminRouter.get("/get-all-agent", isAdmin, getAllAgent);

module.exports = AdminRouter;
