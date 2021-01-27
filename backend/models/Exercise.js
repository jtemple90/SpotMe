const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  muscle: {
    type: String,
    required: true
  },
  sets: {
    type: Number,
  },
  reps: {
    type: Number
  },
  weight: {
    type: Number
  }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;