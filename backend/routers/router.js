const express = require("express");
const MainRouter = express.Router();
// route
const TempRouter = require("./temp");
const AuthRoute = require("./auth");
const LOIRoute = require("./LOI");
const pdfgen = require("../controller/PDF/genaretLatter");
const genitenary = require("../controller/PDF/genItenary");
const AgentRoute = require("./agent");

const Pdf_Gen = require("../GenaretePDF/GenaratePDF");
const AdminRouter = require("./admin");
const Logout = require('../controller/agent/logout');

MainRouter.use("/pdfgen/:id", pdfgen);
MainRouter.use("/pdfgenitenary/:id", genitenary);

// agent route

MainRouter.use("/api/agent", AgentRoute);
MainRouter.use("/api/auth", AuthRoute);
MainRouter.use("/temp", TempRouter);
MainRouter.use("/api/loi", LOIRoute);
MainRouter.use("/api/admin", AdminRouter);

MainRouter.get("/api/logout", Logout);

module.exports = MainRouter;
