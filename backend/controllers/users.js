// const passport = require("passport");
// const passportConfig = require("../passport");
// const JWT = require("jsonwebtoken");
const db = require("../models");

const index = (req, res) => {
  db.User.find()
    .then((foundUsers) => {
      console.log(foundUsers);
      res.json({users: foundUsers})
    }).catch(err => res.json(err, "Unable to get user data"))
};
const create = (req, res) => {
  db.User.create(req.body, (err, savedUser) => {
    res.json({ user: savedUser })
  }).catch((err) => {
     console.log("Error in user.create:", err);
     res.json({ Error: "Unable to get data" });
  })
  const username = req.body.username
  const newUser = new User(req.body);
    newUser.save(err => {
      if (err) console.log(err)

      else {
        console.log('Account Successfully created')
      }
    })
};

const show = (req, res) => {
  db.User.findById(req.params.id)
  .populate({path: 'workouts', path: 'articles'})
    .then((foundUser) => {
      res.json({  user: foundUser })
    }).catch(err => {
       console.log(err, "error is user show");
       res.json({ err: "Unable to get user data" });
    })
}

const update = (req, res) => {
  db.User.findByIdAndUpdate(
    req.params.id,
    req.body, 
    { new: true },
    (err,  updatedUser) => {
      if(err) console.log("THis is the error for users.update: ", err)

      res.json({ user: updatedUser })
    })
};

const destroy = (req, res) => {
  db.User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
    if (err) console.log('Error in the deteled users:', err)
    db.Workout.remove({
      _id: {
        $in: deletedUser.workouts
      }
    })
    db.Article.remove({
      _id: {
        $in: deletedUser.articles,
      },
    });

    res.json({ user: deletedUser })
  })
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};