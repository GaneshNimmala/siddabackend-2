const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/guitar", (req, res) => {
  res.render("guitar");
});

router.get("/drum", (req, res) => {
  res.render("drum");
});

router.get("/epad", (req, res) => {
  res.render("epad");
});

router.get("/violin", (req, res) => {
  res.render("violin");
});

router.get("/piano", (req, res) => {
  res.render("piano");
});

router.get("/vocal", (req, res) => {
  res.render("vocal");
});

router.get("/singing", (req, res) => {
  res.render("singing");
});

module.exports = router;
