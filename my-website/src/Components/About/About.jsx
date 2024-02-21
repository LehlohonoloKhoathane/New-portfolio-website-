
import React from 'react';
import { motion } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './VerticalLine.css';
import './About.css'; // Your custom CSS file

const About = () => {
    // Data for technology expertise
const dataT = [
    {
        name: `Node.Js`,
        img: `./Assets/Images/nodejs.png`
    },
    {
        name: `Git`,
        img: `./Assets/Images/git.png`
    },
    {
        name: `Vs Code`,
        img: `./Assets/Images/vscode.png`
    },
    {
        name: `Flutter`,
        img: `./Assets/Images/flutter.png`
    },
    {
        name: `TailWind`,
        img: `./Assets/Images/tailwind.png`
    },
    {
        name: `React.Js`,
        img: `./Assets/Images/react.png`
    },
    {
        name: `Django`,
        img: `./Assets/Images/django-py.png`
    },
    {
        name: `Figma`,
        img: `./Assets/Images/figma.png`
    },
    {
        name: `JavaScript`,
        img: `./Assets/Images/Java.png`
    },
    {
        name: `Java`,
        img: `./Assets/Images/javas.png`
    },
    {
        name: `Html & CSS`,
        img: `./Assets/Images/html.png`
    },
    {
        name: `C++`,
        img: `./Assets/Images/C++.png`
    }
]

// Data for data analysis expertise
const dataD = [
    {
        name: `MongoDb`,
        img: `./assets/images/mongodb.png`
    },
    {
        name: `R`,
        img: `./asstes/images/r-learn.png`
    },
    {
        name: `SPSS`,
        img: `./assets/images/SPSS.webp`
    },
    {
        name: `Excel`,
        img: `./assets/images/excel.png`
    },
    {
        name: `Power BI`,
        img: `./assets/images/powerBI.png`
    },
    {
        name: `Scikit-Learn`,
        img: `./assets/images/scikit-learn.png`
    },
    {
        name: `SQL/NoSql`,
        img: `./assets/images/sql.png`
    },
    {
        name:`Python`,
        img: `./assets/images/python-logo.png`
    }
]

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 2 // Optional
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 2 // Optional
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 2 // Optional
        }
    };

    return (
        <motion.section className='about-container' id='about-container'>
            <h4>The Person behind the work</h4>
            <hr />
            <h6>Lehlohonolo Khoathane</h6>
            <div className='about-content'>
                <div className='imageCover'>
                    <p className='about-heading'>Aspiring Full Stack Software Developer <span className='vertical-line'></span> Aspiring Data Scientist</p>
                </div>
                <div className='about'>
                    <img className='profile-picture' src='./assets/images/lehlohonolo.jpg' alt='my profile' />
                    <div className="about-info">
                        <p className='about-description'>I'm a versatile aspiring full-stack software developer with a solid background in <span className='degree'>BSc Computer Science and
                            Statistics.</span> Equipped with a degree in these fields and <span>one year of experience</span> in software development, I bring a unique blend of analytical thinking and technical
                            prowess to projects. Proficient in diverse programming languages and technologies, I excel in crafting end-to-end solutions, seamlessly integrating front-end and back-end 
                            development. My passion lies in delivering products that not only meet but exceed client expectations.</p>
                    </div>
                </div>
            </div>
            <div className='skills-container'>
                <h1>Tech Expertise</h1>
                <hr className='horizontal-line'/>
                <div className='skills-subheading'>
                    <p>I bring dynamic set of skills to propel projects forward. Dive deeper into my <span>technological prowess.</span></p>
                </div>
                <div className='skills-development'>
                    <h2>Development</h2>
                    <div className="skills-dev">
                        <Carousel
                            responsive={responsive}
                            ssr={true} // Set to true if you are using server-side rendering
                            infinite={true}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerClass="carousel-container"
                           
                            deviceType="desktop"
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-80-px"
                        >
                            {dataT.map((d, index) => (
                                <div key={index} className="skills-item">
                                    <div className="skills-image">
                                        <img src={d.img} alt="" />
                                    </div>
                                    <div className='skill-name'>
                                        <h4>{d.name}</h4>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
                <div className='skills-data'>
                    <h2>Data Analysis</h2>
                    <div className="skills-data-analysis">
                        <Carousel
                            responsive={responsive}
                            ssr={true} // Set to true if you are using server-side rendering
                            infinite={true}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            deviceType="desktop"
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                        >
                            {dataD.map((d, index) => (
                                <div key={index} className="skills-item">
                                    <div className="skills-image">
                                        <img src={d.img} alt="" />
                                    </div>
                                    <div>
                                        <h4>{d.name}</h4>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default About;
