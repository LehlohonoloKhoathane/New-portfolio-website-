import React from 'react';
import './About.css'
import './VerticalLine.css'; // Import CSS file for styling

const VerticalLine = ({ height }) => {
  return (
    <div className="vertical-line" style={{ height: height }}></div>
  );
}

const About = () => {
    return (
        <section className="about-container">
            <h4>The Person behind the work</h4>
            <hr />
            <h6>Lehlohonolo Khoathane</h6>
            <div className="about-content">
                <p>Aspiring Full Stack Software Developer <VerticalLine height="1em" /> Aspiring Data Scientist</p>
                <div className="about">
                    <img src="./" alt="" />
                    <div className="about-info"></div>
                </div>
            </div>
        </section>
    )
}

export default About;
