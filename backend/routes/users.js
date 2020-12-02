const router = require("express").Router();
const ctrl = require("../controllers");
const passport = require("passport");
const passportConfig = require("../passport");
const JWT = require("jsonwebtoken");


const signToken = userID => {
  return JWT.sign(
    {
      iss: "Zahra912019!",
      sub: userID,
    },
    "Zahra912019!", {expiresIn: '2h'}
  );
}


// ROUTES
router.get("/", ctrl.users.index);
router.get("/:id", ctrl.users.show);
router.post('/register', ctrl.users.create);
router.put('/:id', ctrl.users.update);
router.get('/:id', ctrl.users.destroy);
router.post('/login', passport.authenticate('local',{session: false}),(req, res) => {
  if(req.isAuthenticated()){
    const {_id,username, email} = req.user;
    const token = signToken(_id);
    res.cookie('access-token', token, {httpOnly: true, sameSite: true})
    res.status(200).json({isAuthenticated: true, user: {username, email}})
  }
})

router.get('/logout', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.clearCookie('access-token')
  res.json({user: {username: '', email: ''}, success: true})
})

router.post('/workout', passport.authenticate('jwt', {session: false}), (req, res) => {
  const workout = new Workout(req.body)
  workout.save(err => {
    if (err) console.log(err)
    else{
      req.user = req.workouts.push(workout)
      re.user.save(err => {
        if (err) console.log(err)
        else console.log('success workout create')
      })
    }
  })
})
router.get("/workouts", passport.authenticate("jwt", { session: false }),(req, res) => {
   User.findById({_id: req.user._id}).populate('workouts').exec((err, document) => {
     if (err) console.log(err)

     else {
       res.json({ workouts: document.workouts, authenticated: true })
     }
   })
  });
// router.post("/article", passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     const article = new Article(req.body);
//     article.save((err) => {
//       if (err) console.log(err);
//       else {
//         req.user = req.article.push(article);
//         re.user.save((err) => {
//           if (err) console.log(err);
//           else console.log("success article create");
//         });
//       }
//     });
//   }
// );
// router.get("/articles", passport.authenticate("jwt", { session: false }),(req, res) => {
//     User.findById({ _id: req.user._id })
//       .populate("articles")
//       .exec((err, document) => {
//         if (err) console.log(err);
//         else {
//           res.json({ articles: document.articles, authenticated: true });
//         }
//       });
//   }
// );
router.get("/authenticated",passport.authenticate("jwt", { session: false }),(req, res) => {
    const {username, email} = req.user;
    res.json({ isAuthenticated: true, user: {username, email} })
  }
);
module.exports = router;
