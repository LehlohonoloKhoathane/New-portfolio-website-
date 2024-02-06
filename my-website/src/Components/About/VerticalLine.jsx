import React from 'react';
import './VerticalLine.css'; // Import CSS file for styling

const VerticalLine = ({ height }) => {
  return (
    <div className="vertical-line" style={{ height: height }}></div>
  );
}

export default VerticalLine;
