const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('./models/User');
const JwtStrategy = require('passport-jwt').Strategy;
// cookies
const cookieExtractor = (req) => {
  let token = null;
  if(req && req.cookies){
    token = req.cookies['access_token']
  }
}
// Authorize
passport.use(new JwtStrategy({
  jwtFromRequest: cookieExtractor,
  secretOrKey: 'Zahra912019!'
},(payload, done) => {
  UserModel.findById({_id: payload.sub}, (err, user) => {
    if(err)
      return done(err, false)
    if(user)
      return done(null, user);
    else
      return done(null, false)
  })
}));



// Authenticated 
passport.use(new LocalStrategy((username, password, done) => {
  UserModel.findOne({username}, (err, user) => {
    if (err)
      return done(err);
    if(!user)
      return done(null, false);
    user.comparePassword(password, done)
  })
}))