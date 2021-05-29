const db = require('./models');
const data = require('./workoutData.json');

// db.Exercise.deleteMany({}, (err, deletedExercises) => {
  db.Exercise.create(data.exercises, (err, seededExercises) =>  {
    if(err) console.log(err);

    console.log(data.exercises.length, 'Exercises created successfully');

    process.exit();
  });
// });