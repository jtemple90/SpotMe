const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
    maxLength: 250,
  },
  date: {
    type: Date,
    default: new Date
  }
});


const Post = mongoose.model("Post", postSchema);

module.exports = Post;
