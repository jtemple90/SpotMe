import React from 'react'
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'
import Routes from './config/routes'
import NavBar from './components/NavBar' 
import './App.css'
import { Router } from 'react-router-dom';

function App() {
  return (
    // <Router>
      <div className='App'>
        <NavBar />
        { Routes }
        <Footer />
      </div>
    // </Router>
    
    
  );
}

export default App;
