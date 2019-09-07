import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import HomePage from './components/home-page/HomePage'
import LandingPage from './components/landing-page/LandingPage'

function App() {
  return (
    <div className="App">
      <Route exact path= '/' component = {LandingPage}/>
      <Route path='/home'component = {HomePage}/>
    </div>
  );
}

export default App;
