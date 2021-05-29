import React, { useState} from 'react';
import { Link } from "react-router-dom";
import { Button } from '../Button/Button'
import './NavBar.css'
import logo from'../../images/logo.png'
function NavBar() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

const handleClick = () => setClick(!click)
const closeMobileMenu = () => setClick(false)

const showButton = () => {
  if(window.innerWidth <= 960) {
    setButton(false)
  } else {
    setButton(true)
  }
}
window.addEventListener('resize', showButton)
    

  
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <Link className="navbar-logo" to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
          </div>
    
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <Link className="nav-links" to="/" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-links" to="/workouts" onClick={closeMobileMenu}>
                  Workouts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-links" to="/articles" onClick={closeMobileMenu}>
                  Articles
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-links-button" to="/register" onClick={closeMobileMenu}>
                  Sign Up
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    );
  }

export default NavBar; 