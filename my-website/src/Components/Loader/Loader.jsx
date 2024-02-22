
import React, { useState, useEffect } from 'react';
import { RingLoader } from 'react-spinners';

import './Loader.css';

const Root = () => {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Simulating a 2-second delay
      setTimeout(() => {
        setLoading(false);
      }, 4000);
    }, []);
}  

const Loader = () => {
    return (
      <div className="loader">  <RingLoader color="#36D7B7" loading={true} size={60} /></div>
    );
  };
  

export default Loader;
