import React from 'react'
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'
import Routes from './config/routes'
import NavBar from './components/NavBar' 
import './App.css'
import ArticlesList from './components/articles/ArticleList'
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './store'
function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <NavBar />
        <ArticlesList />
        { Routes }
        <Footer />
      </div>
    </Provider>
    
    
  );
}

export default App;
