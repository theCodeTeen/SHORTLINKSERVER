const { redirection } = require("../controllers/redirectController");

const Router = require("express").Router();

Router.get("/:id", redirection);
module.exports = Router;
