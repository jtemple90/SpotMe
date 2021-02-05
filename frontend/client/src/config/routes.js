import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import LandingPage from "../pages/Landing/LandingPage";
import Workouts from "../components/workouts/Workouts";
import EditWorkout from "../components/workouts/EditWorkout";
import NewWorkout from "../components/workouts/NewWorkout";
import Articles from "../components/articles/Articles";
import EditArticle from "../components/articles/EditArticle";
import NewArticle from "../components/articles/NewArticle";
import NewUser from "../components/user/NewUser";
import Login from '../pages/Login/Login';
import Register from "../pages/Register/Register";



export default (
  <Router>
  <NavBar />
    <Route path="/" exact component={(LandingPage)} />
    <Route path="/workouts" exact component={(Workouts)} />
    <Route path="/workouts/update/:id" exact component={(EditWorkout)} />
    <Route path="/workouts/new" exact component={(NewWorkout)} />
    <Route path="/articles" exact component={(Articles)} />
    <Route path="/articles/update/:id" exact component={(EditArticle)} />
    <Route path="/articles/new" exact component={(NewArticle)} />
    <Route path="/user/new" exact component={(NewUser)} />
    <Route path="/login" exact component={(Login)}/>  
    <Route path="/register" exact component={(Register)}/>  
    {/* <Route path="/user/:id" exact component={(ShowUser)} /> */}
    {/* <Footer/> */}
  </Router>
);
