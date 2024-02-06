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
                <div className='skills-development'>
                    <h2>Development</h2>
                    <div className='skills-icons'>
                        <div className='skill-icon'>
                            <img src="./Assets/Images/Java.png" alt="" />
                            <h3>JavaScript</h3>
                        </div>
                        <div className='skill-icon'>
                            <img src="./Assets/Images/javas.png" alt="" />
                            <h3>Java</h3>
                        </div>
                        <div className='skill-icon'>
                            <img src="./Assets/Images/html.png" alt="" />
                            <h3>Html & CSS</h3>
                        </div>
                        <div className='skill-icon'>
                            <img src="./Assets/Images/C++.png" alt="" />
                            <h3>C++</h3>
                        </div>
                        <div className='skill-icon'>
                            <img src="./Assets/Images/figma.png" alt="" />
                            <h3>Figma</h3>
                        </div>
                        <div className='skill-icon'>
                            <img src="./Assets/Images/flutter.png" alt="" />
                            <h3>Flutter</h3>
                        </div>
                        <div className='skill-icon'>
                            <img src="./Assets/Images/vscode.png" alt="" />
                            <h3>Vs Code</h3>
                        </div>
                        <div className='skill-icon'>
                            <img src="./Assets/Images/tailwind.png" alt="" />
                            <h3>TailWind</h3>
                        </div>
                        <div className='skill-icon'>
                            <img src="./Assets/Images/git.png" alt="" />
                            <h3>Git</h3>
                        </div>
                        <div className='skill-icon'>
                            <img src="./Assets/Images/react.png" alt="" />
                            <h3>React.Js</h3>
                        </div>
                        <div className='skill-icon'>
                            <img src="./Assets/Images/nodejs.png" alt="" />
                            <h3>Node.Js</h3>
                        </div>
                        <div className='skill-icon'>
                            <img src="./Assets/Images/Django.png" alt="" />
                            <h3>Django</h3>
                        </div>
                    </div>
                </div>
                <div className='skills-data'>
                    <h2>Data Analysis</h2>
                    <div className='skills-icons'>
                        <div className='skill-icon'>
                            <img src="./Assets/Images/python.png" alt="" />
                            <h3>Python</h3>
                        </div>
                        <div className='skill-icon'>
                            <img src="./Assets/Images/sql.png" alt="" />
                            <h3>SQL/NoSql</h3>
                        </div>
                        <div className='skill-icon'>
                            <img src="./Assets/Images/scikit-learn.png" alt="" />
                            <h3>Scikit-Learn</h3>
                        </div>
                        <div className='skill-icon'>
                            <img src="./Assets/Images/powerBI.png" alt="" />
                            <h3>Power BI</h3>
                        </div>
                        <div className='skill-icon'>
                            <img src="./Assets/Images/excel.png" alt="" />
                            <h3>Excel</h3>
                        </div>
                        <div className='skill-icon'>
                            <img src="./Assets/Images/SPSS.png" alt="" />
                            <h3>SPSS</h3>
                        </div>
                        <div className='skill-icon'>
                            <img src="./Assets/Images/r-learn.png" alt="" />
                            <h3>R</h3>
                        </div>
                        <div className='skill-icon'>
                            <img src="./Assets/Images/mongodb.png" alt="" />
                            <h3>Mongo</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
