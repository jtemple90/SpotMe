const express = require("express");
const cors = require('cors');

const routes = require('./routes');

require('dotenv').config();

const PORT = process.env.PORT || 4000;
const app = express();

const corsOptions ={
  origin: 'http://localhost:3000'
};

app.use(express.json());
app.use(cors(corsOptions));


app.use('/api/v1/exercises', routes.exercises);
// app.use('/exercises', routes.exercises);
app.use('/users', routes.users);


app.listen(PORT, () => console.log(`Server is running of Port ${PORT}`));
