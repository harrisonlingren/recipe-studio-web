var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index");
});

// GET terms page
router.get("/terms", (req, res, next) => {
  console.log("hi");
  res.render("terms");
});

// GET login page
router.get("/login", (req, res, next) => {
  res.render("login");
});

router.get("/logout", (req, res, next) => {
  res.render("logout");
});

router.get("/signup", (req, res, next) => {
  res.render("signup");
});

router.get("/verify", (req, res, next) => {
  res.render("verify");
});

module.exports = router;
