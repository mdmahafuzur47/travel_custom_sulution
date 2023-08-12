const express = require('express');
const LOIRoute = express.Router();
const LOIEntry = require('../controller/LOI/LOIentry');
const LOIacsses = require('../middleware/Auth/LOIacsses');


LOIRoute.post('/entry',LOIacsses,LOIEntry);




module.exports = LOIRoute;