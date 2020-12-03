const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
// import morgan from "morgan";
// import config from "./config";


const articles = require('./routes/api/articles')
const workouts = require('./routes/api/workouts')
// const users = require('./routes/api/users')

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




// // DB config
// const db = require('./config/keys').MONGODB_URI


app.use('/api/articles', articles)
// app.use('/api/v1/exercises', routes.exercises);
app.use('/api/workouts', workouts);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is running of Port ${PORT}`));
