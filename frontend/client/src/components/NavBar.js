import React from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../Context/AuthService';
import { AuthContext } from '../Context/AuthContext'
import './NavBar.css'
import logo from'../images/logo.png'

const NavBar = (props) => {
  const {isAuthenticated,user,setIsAuthenticated,setUser} = useContext(AuthContext);

  const onClickLogoutHandler = () => {
    AuthService.logout().then(data => {
      if(data.success){
        setUser(data.user);
        setIsAuthenticated(false)
      }
    })
  }

  const unauthenticatedNavBar = () => {
    return (
      <>
        <ul>
        
          <li className="nav-item">
            <Link className="nav-link" href="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/register">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/articles">
              Articles
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-md-0">
          <input
              className="form-control"
              type="text"
              placeholder="Search Articles"
              aria-label="Search"
          />
        </form>
      </>
    )
  }

  const authenticatedNavBar = () => {
    return (
      <>
        <ul>
          {/* <li className="nav-item">
            <Link className="nav-link" href="#">
              Profile
            </Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link" href="/workouts/new">
              Create Workout
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/workouts">
              WorkoutHistory
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/articles/new">
              Post an Article
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/articles">
              Articles
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-md-0">
          <input
            className="form-control"
            type="text"
            placeholder="Search Articles"
            aria-label="Search"
          />
        </form>
        <button type='button' 
          className='btn btn-link nav-item mav-link' 
          onClick={onClickLogoutHandler}>
          Logout
        </button>
      </>
    );
      
  }

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg rounded">
        <a className="navbar-brand brand-name" href="#">
          Spot Me
        </a>
        <img className='nav-logo' src={ logo } alt="Logo" />
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
        <div className="collapse navbar-collapse" id="nav-button">
          <ul className="navbar-nav mr-auto">
            {!isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
            </ul>
             {/* <li className="nav-item">
              <Link className="nav-link" href="#">
                Profile<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Create Workout
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                WorkoutHistory
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Post an Article
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Articles
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-md-0">
            <input
              className="form-control"
              type="text"
              placeholder="Search Articles"
              aria-label="Search"
            />
          </form>  */}
        </div>
      </nav>
    </div>
  );
}
export default NavBar