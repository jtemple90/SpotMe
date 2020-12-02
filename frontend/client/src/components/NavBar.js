import React from 'react';
import { Link } from 'react-router-dom';
// import AuthService from '../Services/AuthService';
// import { AuthContext } from '../Context/AuthContext'
import './NavBar.css'
import logo from'../images/logo.png'

const NavBar = (props) => {
  // const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(AuthContext);

  // const onClickLogoutHandler = () => {
  //   AuthService.logout().then((data) => {
  //     if (data.success) {
  //       setUser(data.user);
  //       setIsAuthenticated(false);
  //     }
  //   });
  // };
  // const unauthenticatedNavBar = () => {
  //   return (
  //     <>
  //       <ul>
        
  //           <Link className="nav-link" href="/">
  //             <li className="nav-item">
  //               Home
  //             </li>
  //           </Link>
  //           <Link className="nav-link" href="/login">
  //             <li className="nav-item">
  //               Login
  //             </li>
  //           </Link>
  //           <Link className="nav-link" href="/register">
  //             <li className="nav-item">
  //               Register
  //             </li>
  //           </Link>
  //           <Link className="nav-link" href="/articles">
  //             <li className="nav-item">
  //               Articles
  //             </li>
  //           </Link>
  //       </ul>
  //       <form className="form-inline my-2 my-md-0">
  //         <input
  //             className="form-control"
  //             type="text"
  //             placeholder="Search Articles"
  //             aria-label="Search"
  //         />
  //       </form>
  //     </>
  //   )
  // }

  // const authenticatedNavBar = () => {
  //   return (
  //     <>
  //       <ul>
  //         <li className="nav-item">
  //           <Link className="nav-link" href="#">
  //             Profile
  //           </Link>
  //         </li>
  //           <Link className="nav-link" href="/workouts/new">
  //             <li className="nav-item">
  //               Create Workout
  //             </li>
  //           </Link>
  //           <Link className="nav-link" href="/workouts">
  //             <li className="nav-item">
  //               WorkoutHistory
  //             </li>
  //           </Link>
  //           <Link className="nav-link" href="/articles/new">
  //             <li className="nav-item">
  //               Post an Article
  //             </li>
  //           </Link>
  //           <Link className="nav-link" href="/articles">
  //             <li className="nav-item">
  //               Articles
  //             </li>
  //           </Link>
  //       </ul>
  //       <form className="form-inline my-2 my-md-0">
  //         <input
  //           className="form-control"
  //           type="text"
  //           placeholder="Search Articles"
  //           aria-label="Search"
  //         />
  //       </form>
  //       <button type='button' 
  //         className='btn btn-link nav-item mav-link' 
  //         onClick={onClickLogoutHandler}>
  //         Logout
  //       </button>
  //     </>
  //   );
      
  // }

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
        <div className="collapse navbar-collapse" id="nav-button">
          <ul className="navbar-nav mr-auto">
            {/* {!isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()} */}
            
              <li className="nav-item">
                <Link to className="nav-link" href="/users/:id">
                  Profile
                </Link>
              </li>
              <Link to className="nav-link" href="/workouts/new">
                <li className="nav-item">Create Workout</li>
              </Link>
              <Link to className="nav-link" href="/workouts">
                <li className="nav-item">WorkoutHistory</li>
              </Link>
              <Link to className="nav-link" href="/articles/new">
                <li className="nav-item">Post an Article</li>
              </Link>
              <Link to className="nav-link" href="/articles">
                <li className="nav-item">Articles</li>
              </Link>
            </ul>
            <form className="form-inline my-2 my-md-0">
              <input
                className="form-control"
                type="text"
                placeholder="Search Articles"
                aria-label="Search"
              />
            </form>
            {/* <button
              type="button"
              className="btn btn-link nav-item mav-link"
              onClick={onClickLogoutHandler}
            >
              Logout
            </button> */}
        
        </div>
      </nav>
    </div>
  );
}
export default NavBar