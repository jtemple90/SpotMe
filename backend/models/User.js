const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  image: {
    type: Image
  },
  createdAt: {
    type: Date,
    default: Date.now
  },

});

module.exports = mongoose.model('User', userSchema);