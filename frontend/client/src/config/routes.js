import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import LandingPage from "../pages/Landing/LandingPage";
import DashboardPage from "../pages/DashboardPage";
import WorkoutsPage from "../pages/WorkoutsPage";
import Login from '../components/Login'


export default (
  <Router>
    <NavBar />
    <Route path="/" exact component={(LandingPage, NavBar, Footer)} />
    <Route path="/workouts" exact component={(WorkoutsPage, NavBar, Footer)} />
    {/* <Route path="/create" exact component={CreateWorkout} /> */}
    <Route path="/user/:id" exact component={(DashboardPage, NavBar, Footer)} />
    <Route path="/login" component={(Login, NavBar, Footer)} />
    {/* <Route path="/register" component={(Register, NavBar, Footer)} /> */}
    <Footer />
  </Router>
);
