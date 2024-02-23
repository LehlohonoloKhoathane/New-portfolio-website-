import React, { useState, useEffect } from 'react';
import './ScrollFeature.css';

// Functional component for the scroll feature
const ScrollFeature = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  // Effect to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      setIsVisible(lastScrollPosition > currentScrollPosition);
      setLastScrollPosition(currentScrollPosition);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);   

     // Clean up by removing scroll event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPosition]);

   // Render the scroll feature with dynamic class based on visibility state
  return (
    <div className={`scroll-feature ${isVisible ? 'visible' : 'hidden'}`}>
      Feature content
    </div>
  );
};

export default ScrollFeature;
