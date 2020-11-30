const db = require('../models');

const index = (req, res) => {
  db.Exercise.find({})
  .then((foundExercises) => {
    console.log(foundExercises)
    res.json({ exercises: foundExercises });
  }).catch((err) => {
    console.log('The Error in the exercise index is=============:', err);
    res.json({ err: 'Unable to get exercise data'})
  })
}

const show = (req, res) => {
  db.Exercise.findById(req.params.id)
    .then((foundExercise) => {
      res.json({ exercise: foundExercise })
    }).catch((err) => {
      console.log(err, 'error is exercise show')
      res.json({ err: 'Unable to get exercise data'})
    })
}

const create = (req, res) => {
  db.Exercise.create(req.body, (err, savedExercise) => {
      res.json({ exercise: savedExercise })
    }).catch((err) => {
      console.log("Error in exercise.create:", err)
      res.json({ Error: "Unable to get data" })
    })
}
const update = (req, res) => {
  db.Exercise.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedExercise) => {
      if(err) console.log('The error in the exercise.update is:', err);

      res.json({ exercise: updatedExercise });
    })
};

const destroy = (req, res) => {
  db.Exercise.findByIdAndDelete(req.params.id, (err, deleteExercise) => {
    if(err) console.log('The error in exercise.destroy is:' , err);

    res.json({ exercise: deleteExercise })
  })
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
}