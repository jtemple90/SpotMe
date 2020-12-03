import React from 'react' 
import './LandingPage.css'
import Logo from '../../images/logo.png'

const LandingPage = () => {


  



  return (
    <div className="landing-container">
      <header className="landing-header">
        <img className="landlogo" src={Logo} alt="Logo" />
        <br/>
        <p className='landp'>The Ultimate Workout Partner</p>
      </header>
    </div>
  );
}
export default LandingPage