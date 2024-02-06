import React from 'react';
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';

const App = () => {
  return (
    <>
      <NavBar />
      <div className='container'>
        <Home />
        <About/>
      </div>
    </>
  );
};

export default App;
