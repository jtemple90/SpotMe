const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();

const posts = require('./routes/api/blogPosts')
const workouts = require('./routes/api/workouts')
const exercises = require('./routes/api/exercises')
const users = require('./routes/api/users')

app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors());
app.use(express.json());

require('dotenv').config();


const db = require("./config/keys").MONGODB_URI;
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

app.use('/api/exercises', exercises)
app.use('/api/blogPosts', posts)
app.use('/api/users', users);
app.use('/api/workouts', workouts);
// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
  //Set Static Folder
  app.use(express.static('frontend/client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend/client', 'build', 'index.html'))
  })
}
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is running of Port ${PORT}`));
