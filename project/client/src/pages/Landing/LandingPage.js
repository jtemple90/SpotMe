import React from 'react' 
import './LandingPage.css' 
import { Link } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'

const LandingPage = () => {


  



  return (
    <div className="landing">
    <NavBar/>
    <div className="landing-main">
      <h1 className='landing-title'>Spot Me!</h1>
      <p className='landing-sub'>The Ultimate Workout Partner</p>
      <Link to="/login" className='login-link'><button className="login-button">Sign In</button></Link>
      <p></p>
    </div>
    <Footer/>
    </div>
  );
}
export default LandingPage