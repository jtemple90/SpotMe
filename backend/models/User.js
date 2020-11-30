const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    // required: true,
    // unique: true,
    // trim: true
  },
  email: {
    type: String,
    // required: true,
    // unique: true,
  },
  // firstName: {
  //   type: String,
  //   required: true,
  // },
  // lastName: {
  //   type: String,
  //   required: true,
  // },
  // image: {
  //   type: String,
  // },
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
  articles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Article",
    },
  ],
  exercises: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Exercise",
    },
  ],
});

module.exports = mongoose.model('User', userSchema);