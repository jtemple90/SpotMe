// Requirements
const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();

// Router Variables
const articles = require('./api/articles')
const workouts = require('./api/workouts')
const users = require('./api/users')

// Middleware
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors());
app.use(express.json());


// Require Config and .env files
require('dotenv').config();

//config Db
const db = require("./config/keys").MONGODB_URI;

// config options
const configOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};
// Connect to mongo
mongoose.connect(db, configOptions)
  .then(() => console.log('Mongo Db Connected...'))
  .catch(err => console.log(err))


  // Middleware for routes
app.use('/api/articles', articles)
app.use('/api/users', users);
app.use('/api/workouts', workouts);
// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
  //Set Static Folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}
const PORT = process.env.PORT || 3300;
app.listen(PORT, () => console.log(`Server is running of Port ${PORT}`));
