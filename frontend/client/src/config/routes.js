import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "../pages/Landing/LandingPage";
import DashboardPage from "../pages/DashboardPage";
import WorkoutsPage from "../pages/WorkoutsPage";
// import Login from '../components/Login'


export default (
  <Router>
    <Route path="/" exact component={(LandingPage)} />
    <Route path="/workouts" exact component={(WorkoutsPage)} />
    {/* <Route path="/create" exact component={CreateWorkout} /> */}
    <Route path="/user/:id" exact component={(DashboardPage)} />
    {/* <Route path="/login" component={(Login)} /> */}
    {/* <Route path="/register" component={(Register)} /> */}
  </Router>
);
