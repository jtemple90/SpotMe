// import React, {useContext} from 'react'
// import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'
import Routes from './config/routes'
// import NavBar from './components/NavBar' 
import './App.css'
// import {AuthContext} from './Context/AuthContext'

function App() {
  // const { user,setUser,isAuthenticated,setIsAuthenticated } = useContext(AuthContext)
  // console.log(user)
  // console.log(isAuthenticated)
  return (
    <div className='App'>
      {/* <NavBar /> */}
      { Routes }
      {/* <Footer /> */}
    </div>
    
  );
}

export default App;
