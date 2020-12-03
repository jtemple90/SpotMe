import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './NavBar.css'
import logo from'../images/logo.png'

class NavBar extends Component {
  render(){
   return (
    <div className="container">
      <nav className="navbar navbar-expand-lg rounded">
        <a className="navbar-brand brand-name" href="/">
          Spot Me
        </a>
        <img className="nav-logo" src={logo} alt="Logo" />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon menu">Menu</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample09">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/user/new">
                Create User
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/workouts/new">
                Create Workout
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/workouts">
                WorkoutHistory
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/articles/new">
                Post an Article
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/articles">
                Articles
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-md-0">
            <input
              className="form-control"
              type="text"
              placeholder="Search Articles"
              // aria-label="Search"
            />
          </form>
        </div>
      </nav>
    </div>
  );
  }
}
export default NavBar; 