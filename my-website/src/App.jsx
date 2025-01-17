//importing necessary dependencies for the app
import React from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from './Components/navbar/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Work from './Components/Work/Work';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Cursor from './Components/Cursor/Cursor';
import BackToTopButton from './Components/BackToTop/BackToTop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import Loader from './Components/Loader/Loader';


const App = () => {

  const [isLoading, setIsLoading] = useState(true);

  // Effect to simulate content loading delay
  useEffect(() => {
    
    // Simulating content loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
    
    // Render the loader if loading, otherwise render the app content
    return (
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <div className='container'>       {/* Main container for the app */}
            <NavBar /> 
            <Cursor/>
            <Home />
            <About/>
            <Services/>
            <Work />
            <Contact/>
            <ToastContainer />
            <BackToTopButton/> 
            <Footer/>  
          </div>
        )}
      </>
    );
    
  }    

export default App;
