const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

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
    workouts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Workout",
      }],
    articles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Article",
      }],
  },
  { timestamps: true });

userSchema.pre('save', function(next) {
  if(!this.isModified('password'))
    return next();
    bcrypt.hash(this.password, 10, (err, passwordHashed) => {
      if(err) 
        return next(err);

      this.password = passwordHashed;
      next();
    })
});

userSchema.methods.comparePassword = function(password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if(err)
      return cb(err);
    else {
      is(!isMatch)
        return cb(null, isMatch);
      return cb(null, this);
    }
  }) 
}

const User = mongoose.model("User", userSchema);

module.exports = User;
