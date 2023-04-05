const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "get all workout" });
});

router.get("/:id", (req, res) => {
  res.json({ msg: "get single workout" });
});

router.post("/", (req, res) => {
  res.json({ msg: "post a new workout" });
});

router.delete("/:id", (req, res) => {
  res.json({ msg: "remove a  workout" });
});

router.patch("/:id", (req, res) => {
  res.json({ msg: "update a  workout" });
});

module.exports = router;
