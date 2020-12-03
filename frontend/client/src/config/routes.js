import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import LandingPage from "../pages/Landing/LandingPage";
import WorkoutsPage from "../components/workouts/WorkoutsPage";
import EditWorkout from "../components/workouts/EditWorkout";
import NewWorkout from "../components/workouts/NewWorkout";
import ArticlesPage from "../components/articles/ArticlesPage";
import EditArticle from "../components/articles/EditArticle";
import NewArticle from "../components/articles/NewArticle";
import CreateUser from "../components/user/CreateUser";
// import EditUser from "../components/user/EditUser";
// import ShowUser from "../components/user/ShowUser";


export default (
  <Router>
  <NavBar />
    <Route path="/" exact component={(LandingPage)} />
    <Route path="/workouts" exact component={(WorkoutsPage)} />
    <Route path="/workouts/edit/:id" exact component={(EditWorkout)} />
    <Route path="/workouts/new" exact component={(NewWorkout)} />
    <Route path="/articles" exact component={(ArticlesPage)} />
    <Route path="/articles/edit/:id" exact component={(EditArticle)} />
    <Route path="/articles/new" exact component={(NewArticle)} />
    <Route path="/user/new" exact component={(CreateUser)} />
    {/* <Route path="/user/edit/:id" exact component={(EditUser)} />
    <Route path="/user/:id" exact component={(ShowUser)} /> */}
    <Footer/>
  </Router>
);
