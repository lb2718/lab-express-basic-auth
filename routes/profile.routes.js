// ITERATION 3

const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  const user = req.session.user;

  res.render("profile/index", { username: "user.username" });
});

module.exports = router;
