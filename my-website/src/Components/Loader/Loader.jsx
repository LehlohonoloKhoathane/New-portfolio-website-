
import React, { useState, useEffect } from 'react';
import './Loader.css';

const Root = () => {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Simulating a 2-second delay
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);
}  

const Loader = () => {
    return (
      <div className="loader">Loading...</div>
    );
  };
  

export default Loader;
