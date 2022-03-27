const router = require("express").Router();
const bcrypt = require("bcryptjs");
const saltRounds = 10;
const User = require("../models/User.model");
// const isLoggedOut = require("./middleware/isLoggedOut");
// const isLoggedIn = require("./middleware/isLoggedIn");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/signup", (req, res) => {
  res.render("auth/signup");
});

module.exports = router;
