import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import LandingPage from "../pages/Landing/LandingPage";
import Workouts from "../components/workouts/Workouts";
import EditWorkout from "../components/workouts/Edit-Workout/EditWorkout";
import NewWorkout from "../components/workouts/New-Workout/NewWorkout";
import NewUser from "../components/user/NewUser";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export default (
  <Router>
    <NavBar />
    <Route path="/" exact component={LandingPage} />
    <Route path="/workouts" exact component={Workouts} />
    <Route path="/workouts/update/:id" exact component={EditWorkout} />
    <Route path="/workouts/new" exact component={NewWorkout} />
    <Route path="/user/new" exact component={NewUser} />
    <Route path="/login" exact component={Login} />
    <Route path="/register" exact component={Register} />
  </Router>
);
