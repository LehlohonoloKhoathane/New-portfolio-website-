import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import './BackToTop.css'

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisibility);

  return (
    <>
      {isVisible && (
        <div className="back-to-top" onClick={scrollToTop}>
          <FaArrowCircleUp className="icon" />
        </div>
      )}
      
    </>
  );
};

export default BackToTopButton;
