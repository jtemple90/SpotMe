const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const cookieParser = require('cookie-parser');
const routes = require('./routes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// const corsOptions ={
//   origin: 'http://localhost:3000'
// };
app.use(cookieParser())
app.use(cors());
app.use(express.json());





const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
  useUnifiedTopology: true, 
  useNewUrlParser: true,
  useCreationIndex: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDb database connection established successfully");
});


app.use('/api/v1/exercises', routes.exercises);
app.use('/articles', routes.articles);
app.use('/users', routes.users);
app.use('/workouts', routes.workouts);

// const User = require('./models/User')

// const userInput = {
//   username: 'testing',
//   password: '1234567890',
//   email: 'testing@gmail.com'
// }
// const user = new User(userInput);
// user.save((err, document) => {
//   if (err) console.log(err);

//   console.log(document)
// })
app.listen(PORT, () => console.log(`Server is running of Port ${PORT}`));
