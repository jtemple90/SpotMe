const db = require('../models');

const index = (req, res) => {
  db.Workout.find({})
    .then((foundWorkouts) => {
      console.log(foundWorkouts)
      res.json({ workouts: foundWorkouts })
    }).catch((err) => {
      console.log('The error in the workouts index is:', err);
      res.json({err: 'Unable to get data'})
    })
}

const create = (req, res) => {
  db.Workout.create(req.body, (err, savedWorkout) => {
    res.json({ article: savedWorkout })
  }).catch((err) => {
     console.log("Error in workout.create:", err);
    res.json({ Error: "Unable to get data" });
  })
}

const show = (req, res) => {
  db.Workout.findById(req.params.id)
  .populate({ path: "exercises" })
    .then((foundWorkout) => {
      res.json({ workout: foundWorkout })
    }).catch((err) => {
      console.log("Error in workout.show:", err);
    res.json({ Error: "Unable to get data" });
    })
}

const update = (req, res) => {
  db.Workout.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedWorkout) => {
      if (err) console.log(err)

      res.json({ workout: updatedWorkout })
    })
}

const destroy = (req, res) => {
  db.Workout.findByIdAndDelete(req.params.id, (err, deletedWorkout) => {
    if(err) console.log('Err in destroy workout:', err)
    db.Exercise.remove({
      _id: {
        $in: deletedWorkout.exercises,
      },
    });
    res.json({ workout: deletedWorkout })
  })
}

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};