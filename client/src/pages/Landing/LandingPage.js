import React from "react";
import "./LandingPage.css";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing__container">
      <header className="landingheader">
        <img className="landlogo" src={Logo} alt="Logo" />
        <br />
        <p className="landp">The Ultimate Workout Partner</p>
      </header>
      <div className="user-sign">
        <button>
          <Link className="login" to="/login">
            Login
          </Link>
        </button>
        <p className="register-p">
          No Account? <Link to="/register">Click here</Link> to create an
          account!
        </p>
      </div>
    </div>
  );
};
export default LandingPage;
