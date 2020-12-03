const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  // exercises: [{
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Exercise",
  //   }],
}, {timestamps: true});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
