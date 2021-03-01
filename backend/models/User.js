///////////////////REQUIREMENTS////////////////////////////////////////////
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//////////////////MODEL SCHEMA////////////////////////////////////////////
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      minlength: 5,
      maxLength: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: 10
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    image: {
      type: String,
    },
    // Reference Workout Model As A SubArray Of Objects
    workouts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Workout",
      }],
  { timestamps: true });

// ///////////MONGOOSE MODEL VARIABLE/////////////////////////////////
const User = mongoose.model("User", userSchema);


//////////////////EXPORT MODEL///////////////////////////////////////
module.exports = User;
