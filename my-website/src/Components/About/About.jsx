import React from 'react';
import './About.css'
import './VerticalLine.css'; // Import CSS file for styling

const VerticalLine = ({ height }) => {
  return (
    <div className='vertical-line' style={{ height: height }}></div>
  );
}

const About = () => {
    return (
        <section className='about-container'>
            <h4>The Person behind the work</h4>
            <hr />
            <h6>Lehlohonolo Khoathane</h6>
            <div className='about-content'>
                <p>Aspiring Full Stack Software Developer <VerticalLine height='1em' /> Aspiring Data Scientist</p>
                <div className='about'>
                    <img className='profile-picture' src='./assets/images/lehlohonolo.jpg' alt='my profile' />
                    <div className="about-info">
                        <p>I'm a versatile aspiring full-stack software developer with a solid background in <span className='degree'>BSc Computer Science and
                            Statistics.</span> Equipped with a degree in these fields, I bring a unique blend of analytical thinking and technical
                            prowess to projects. Proficient in diverse programming languages and technologies, I excel in crafting end-to-
                            end solutions, seamlessly integrating front-end and back-end development. My passion lies in delivering
                            products that not only meet but exceed client expectations.</p>
                    </div>
                </div>
            </div>
            <div className='skills-container'>
                <h1>Tech Expertise</h1>
                <hr />
                <p>I bring dynamic set of skills to propel projects forward. Dive deeper into my <span>technological prowess.</span></p>
            </div>
        </section>
    )
}

export default About;
