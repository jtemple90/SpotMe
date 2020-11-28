const db = require('../models');

const index = (req, res) => {
  db.Exercise.findById(req.params.id)
  .then((foundExercises) => {
    res.json({ exercises: foundExercises })
  }).catch((err) => {
    console.log('The Error in the exercise index is=============:', err);
  res.json({ err: 'Unable to get exercise data'})
  })
}

const show = (req, res) => {

}


module.exports = {
  index,
}