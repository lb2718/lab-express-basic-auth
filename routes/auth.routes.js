const { Router } = require("express");
const router = new Router();
const bcryptjs = require("bcryptjs");
const User = require("../models/User.model");

// GET route ==> to display the signup form to users

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

// POST route ==> to process form data

router.post("/signup", (req, res, next) => {
  const { username, password } = req.body;

  if (!username) {
    return res.status(400).render("auth/signup", {
      errorMessage: "Please provide your username.",
    });
  }
});

module.exports = router;
