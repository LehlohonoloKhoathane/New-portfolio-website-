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
import BackToTopButton from './Components/BackToTop/BackToTop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import Loader from './Components/Loader/Loader';
import SlideInOnScroll from './Components/SLideInOnScroll/SLideInOnScroll';



const App = () => {
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating content loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
    {isLoading ? (
      <Loader />
    ) : (
      <div className='container'>
        {/* <NavBar /> */}
        {/* <Loader/> */}
        <Cursor/>
        <Home />
         <About/>
         <Services/>
         <Work />
         <Contact/>
        {/*<ToastContainer />
       
       
       
        <BackToTopButton/> */}
         {/* <Footer/>  */}
      </div>
  
    )}
    </>
);
    
}    
export default App;
