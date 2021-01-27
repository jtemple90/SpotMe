import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './NavBar.css'
class NavBar extends Component {
    

  render(){
    return (
        <nav className="nav navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i class="fas fa-home"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user/:id">
                <i className="fas fa-user"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/workouts/new">
                <i class="fas fa-calendar-plus"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/workouts">
                <i class="fas fa-dumbbell"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/posts">
                <i class="fas fa-newspaper"></i>
              </Link>
            </li>
          </ul>
        </nav>

    );
  }
}
export default NavBar; 