const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  muscle: {
    type: String,
  },
  equipment: {
    type: String
  },
  sets: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  imageUrl: {
    type: String,
  },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;