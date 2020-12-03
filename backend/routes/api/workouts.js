const express = require("express");
const router = express.Router();

const Workout = require("../../models/Workout");
// const
// @route Get api/Workouts


// All Workouts
router.get("/", (req, res) => {
  Workout.find()
    .sort({ date: -1 })
    .then((workouts) => res.json(workouts))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Create Workout
router.post("/add", (req, res) => {
  const newWorkout = new Workout({
    username: req.body.username,
    title: req.body.title,
    description: req.body.description,
  });
  newWorkout.save().then(workout => res.json(workout));
});

//Delete Workout :id
router.delete("/:id", (req, res) => {
  Workout.findByIdAndDelete(req.params.id)
    .then(workout => workout.remove().then(() => res.json("Workout has been deleted")))
    .catch(err => res.status(404).json("It didnt delete"));
});
// Show
router.get("/:id", (req, res) => {
  Workout.findOne(req.params.id)
    .then((foundWorkout) => {
      res.json({ workout: foundWorkout });
    })
    .catch((err) => {
      console.log("Error in Workout.show:", err);
      res.json({ Error: "Unable to get data" });
    });
});
//Update
router.put("/:id", (req, res) => {
  Workout.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedWorkout) => {
      if (err) console.log("The error in update Workout is:", err);

      res.json({ workout: updatedWorkout });
    }
  );
});

module.exports = router;
