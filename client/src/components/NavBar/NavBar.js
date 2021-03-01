import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
class NavBar extends Component {
  render() {
    return (
      <nav className="nav navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <i className="fas fa-home"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/user/:id">
              <i className="fas fa-user"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/workouts/new">
              <i className="fas fa-calendar-plus"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/workouts">
              <i className="fas fa-dumbbell"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/nutrition">
              <i class="fas fa-utensils"></i>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default NavBar;
