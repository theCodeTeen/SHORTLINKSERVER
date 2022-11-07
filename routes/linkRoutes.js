const express = require("express");

const Router = express.Router();
const linkController = require("./../controllers/linkController");
Router.get("/", linkController.getLink);
module.exports = Router;
