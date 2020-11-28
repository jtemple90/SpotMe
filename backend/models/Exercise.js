const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  category: [
    "Legs", "Push", "Pull"
  ],
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
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Exercise", exerciseSchema);