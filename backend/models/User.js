const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      minlength: 4,
      maxLength: 20,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    // workouts: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Workout",
    //   }],
    // articles: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Article",
    //   }],
  },
  { timestamps: true });



const User = mongoose.model("User", userSchema);

module.exports = User;
