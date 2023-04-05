const express = require("express");
const router = express.Router();

const Workout = require("../models/workout");

router.get("/", (req, res) => {
  res.json({ msg: "get all workout" });
});

router.get("/:id", (req, res) => {
  res.json({ msg: "get single workout" });
});

router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json({ workout });
  } catch (error) {
    res.status(400).json({ error: error.msg });
  }
});

router.delete("/:id", (req, res) => {
  res.json({ msg: "remove a  workout" });
});

router.patch("/:id", (req, res) => {
  res.json({ msg: "update a  workout" });
});

module.exports = router;
