const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
// const path = require("path");
const cookieParser = require("cookie-parser");

const workoutRoute = require("./routes/workouts");

const app = express();

require("dotenv").config();

app.use(
  cors({
    origin: "*",
  })
);
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

//////////////// CONNECTION VARIABLES FOR MONGODB//////////////////////////
const db = process.env.MONGODB_URI || "mongodb://localhost:27017/spotme";
const configOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

/////////////////// CONNECT TO MONGODB/////////////////////////////////////
mongoose
  .connect(db, configOptions)
  .then(() => console.log("Mongo Db Connected..."))
  .catch((err) => console.log(err));

// app.use("/users", routes.users);
app.use("/workouts", workoutRoute);
// app.use("/exercises", routes.exercises);
// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  //Set Static Folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is running of Port ${PORT}`));
