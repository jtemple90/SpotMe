const express = require("express");
const router = express.Router();
const Workout = require("../models/Workout");

// All Workouts
router.get("/", (req, res) => {
  Workout.find()
    .sort({ date: -1 })
    .then((workouts) => res.json(workouts))
    .catch((err) => res.status(400).json("Get Workouts Error: " + err));
});

// Create Workout
router.post("/add", (req, res) => {
  const newWorkout = new Workout({
    username: req.body.username,
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
  });
  newWorkout.save().then((workout) => res.json(workout));
});

//Delete Workout :id
router.delete("/:id", (req, res) => {
  Workout.findByIdAndDelete(req.params.id)
    .then((workout) =>
      workout.remove().then(() => res.json("Workout has been deleted"))
    )
    .catch((err) => res.status(404).json("It didn't delete" + err));
});

// Show
router.get("/:id", (req, res) => {
  Workout.findById(req.params.id)
    .then((workout) => res.json(workout))
    .catch((err) => {
      console.log("Error in Workout.show:", err);
      res.json({ Error: "Unable to get data" });
    });
});

//Update
router.post("/update/:id", (req, res) => {
  Workout.findById(req.params.id)
    .then((workout) => {
      workout.username = req.body.username;
      workout.title = req.body.title;
      workout.description = req.body.description;
      workout.date = Date.parse(req.body.date);

      workout
        .save()
        .then(() => res.json("workout updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
