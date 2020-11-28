const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes');

require('dotenv').config();

const PORT = process.env.PORT || 4000;
const app = express();

const corsOptions ={
  origin: 'http://localhost:3000'
};

app.use(express.json());
app.use(cors(corsOptions));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
});

app.use('/api/v1/exercises', routes.exercises)

const connection = mongoose.connection;
connection.once('open', () => {
  console.log(`Mongo Db Connection established`)
})



app.listen(PORT, () => console.log(`Server is running of Port ${PORT}`));
