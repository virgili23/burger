var express = require("express");

// Router
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");



module.exports = router;