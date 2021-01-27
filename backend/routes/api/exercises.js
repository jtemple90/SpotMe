const express = require("express");
const router = express.Router();
const Exercise = require("../../models/Exercise");


// All Workouts
router.get("/", (req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error: " + err));
});
// Create Exercise
router.post("/add", (req, res) => {
  const newExercise = new Exercise({
    name: req.body.name,
    equipment: req.body.equipment,
    sets: req.body.sets,
    reps: req.body.reps,
    weight: req.body.weight
  });
  newExercise.save().then((exercise) => res.json(exercise));
});
//Delete Exercise :id
router.delete("/:id", (req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then((exercise) =>
      exercise.remove().then(() => res.json("Exercise has been deleted"))
    )
    .catch((err) => res.status(404).json("It didnt delete"));
});
// Show
router.get("/:id", (req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => {
      console.log("Error in Exercise.show:", err);
      res.json({ Error: "Unable to get data" });
    });
});
//Update
router.post("/update/:id", (req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => {
      exercise.name = req.body.name,
      exercise.equipment = req.body.equipment,
      exercise.sets = req.body.sets,
      exercise.reps = req.body.reps,
      exercise.weight = req.body.weight
      exercise
        .save()
        .then(() => res.json("exercise updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
