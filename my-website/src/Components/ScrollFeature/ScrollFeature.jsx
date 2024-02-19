import React, { useState, useEffect } from 'react';
import './ScrollFeature.css';

const ScrollFeature = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      setIsVisible(lastScrollPosition > currentScrollPosition);
      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPosition]);

  return (
    <div className={`scroll-feature ${isVisible ? 'visible' : 'hidden'}`}>
      Feature content
    </div>
  );
};

export default ScrollFeature;
