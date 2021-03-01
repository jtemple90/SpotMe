///////////////////REQUIREMENTS////////////////////////////////////////////
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//////////////////MODEL SCHEMA////////////////////////////////////////////
const workoutSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    date: {
      type: Date,
      default: new Date(),
    },
    // Reference Exercise Model As A SubArray
    // exercises: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Exercise",
    //   }],
  },
  { timestamps: true }
);

// ///////////MONGOOSE MODEL VARIABLE/////////////////////////////////
const Workout = mongoose.model("Workout", workoutSchema);

//////////////////EXPORT MODEL///////////////////////////////////////
module.exports = Workout;
