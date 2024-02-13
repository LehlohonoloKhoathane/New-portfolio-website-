import React from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Work from './Components/Work/Work';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Cursor from './Components/Cursor/Cursor';

const App = () => {
  return (
    <>
      <NavBar />
      <div className='container'>
        <Cursor/>
        <Home />
        <About/>
        <Services/>
        <Work />
        <Contact/>
      </div>
      <Footer/>
    </>
  );
};

export default App;
