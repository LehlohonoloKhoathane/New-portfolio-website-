import React from 'react';
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';

const App = () => {
  return (
    <>
      <NavBar />
      <div className='container'>
        <Home />
        <About/>
        <Services/>
      </div>
    </>
  );
};

export default App;
