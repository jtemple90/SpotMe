const express = require("express");
const router = express.Router();
const User = require("../../models/User");

// All Users
router.get("/", (req, res) => {
  User.find()
    .sort({ date: -1 })
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});
// Create User 
router.post("/add", (req, res) => {
  const newUser  = new User ({
    username: req.body.username,
    title: req.body.title,
    description: req.body.description,
  });
  newUser .save().then((user) => res.json(user));
});
//Delete User  :id
router.delete("/:id", (req, res) => {
  User .findByIdAndDelete(req.params.id)
    .then((User ) =>
      user.remove().then(() => res.json("User  has been deleted"))
    )
    .catch((err) => res.status(404).json("It didnt delete"));
});
// Show
router.get("/:id", (req, res) => {
  User .findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => {
      console.log("Error in User .show:", err);
      res.json({ Error: "Unable to get data" });
    });
});
//Update
router.post("/update/:id", (req, res) => {
  user.findById(req.params.id)
    .then((user) => {
      user.username = req.body.username;
      user.title = req.body.title;
      user.description = req.body.description;
      user.date = Date.parse(req.body.date);

      user
        .save()
        .then(() => res.json("user updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
