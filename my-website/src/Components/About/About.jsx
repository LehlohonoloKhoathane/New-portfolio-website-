//importing necessary dependencies for about section
import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './VerticalLine.css';
import VerticalLine from './VerticalLine'
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

    //Responsive settings for Carousel component
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 2 
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 2 
        }
    };

    //Variants for text animation
    const textVariants = {
        initial: {
            x: -500,        //Initial position off-screen to the left
            opacity: 0,     //Initial opacity set to 0 (transparent)
        },
        animate: {
            x: 0,           //Move to the center
            opacity: 1,
            transition: {
                duration: 2,
                staggerChildren: 0.1,
            },
        },
    };

     // State to track if component is in view
    const [isInView, setIsInView] = useState(false);
    const { ref, inView } = useInView({
      threshold: 0.5,
      triggerOnce: true,
    });
  
    useEffect(() => {
      setIsInView(inView);
    }, [inView]);

    return (
        <motion.section variants={textVariants} className='about-container' id='about-container'>
           <motion.h4 variants={textVariants} initial="initial" animate="animate">The Person behind the work</motion.h4>
            <motion.hr variants={textVariants} initial="initial" animate="animate" />
            <motion.h6 variants={textVariants} initial="initial" animate="animate">Lehlohonolo Khoathane</motion.h6>
            <motion.div variants={textVariants} initial="initial" animate="animate" className='about-content'>
                <motion.div variants={textVariants} initial="initial" animate="animate" className='imageCover'>
                    <motion.p variants={textVariants} initial="initial" animate="animate" className='about-heading'>Aspiring Full Stack Software Developer <VerticalLine height='20px' /> Aspiring Data Scientist</motion.p>
                </motion.div>
                <motion.div variants={textVariants} initial="initial" animate="animate" className='about'>
                    <motion.img variants={textVariants} initial="initial" animate="animate" className='profile-picture' src='./assets/images/lehlohonolo.jpg' alt='my profile' />
                    <motion.div variants={textVariants} initial="initial" animate="animate" className="about-info">
                        <motion.p variants={textVariants} initial="initial" animate="animate" className='about-description'>I'm a versatile aspiring full-stack software developer with a solid background in <span className='degree'>BSc Computer Science and
                            Statistics.</span> Equipped with a degree in these fields and <span>one year of experience</span> in software development, I bring a unique blend of analytical thinking and technical
                            prowess to projects. Proficient in diverse programming languages and technologies, I excel in crafting end-to-end solutions, seamlessly integrating front-end and back-end 
                            development. My passion lies in delivering products that not only meet but exceed client expectations.</motion.p>
                    </motion.div>
                </motion.div>
            </motion.div>

            <div className='skills-container'>
                <motion.h1 variants={textVariants} initial="initial" animate="animate">Tech Expertise</motion.h1>
                <motion.hr variants={textVariants} initial="initial" animate="animate" className='horizontal-line'/>
                <motion.div className='skills-subheading'>
                    <motion.p variants={textVariants} initial="initial" animate="animate">I bring dynamic set of skills to propel projects forward. Dive deeper into my <span>technological prowess.</span></motion.p>
                </motion.div>
                 {/* Motion div for Development section */}
                <motion.div
                ref={ref}
                initial={{ x: 0, opacity: 0 }} 
                animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className='skills-development'
                >
                <motion.h2
                initial={{ x: 0, opacity: 0 }} 
                animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                >
                    Development
                </motion.h2>
                <motion.div
                initial={{ x: 0, opacity: 0 }} 
                animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
                className='skills-dev'
                >
                <Carousel
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    keyBoardControl={true}
                    customTransition="transform 500ms ease-in-out"
                    transitionDuration={500}
                    containerClass='carousel-container'
                    deviceType='desktop'
                    dotListClass='custom-dot-list-style'
                    itemClass='carousel-item-padding-80-px'
                >
                    {/* Mapping dataT array to render carousel items */}
                    {dataT.map((d, index) => (
                        <div key={index} className='skills-item'>
                            <div className='skills-image'>
                                <img src={d.img} alt='' />
                            </div>
                            <div className='skill-name'>
                                <h4>{d.name}</h4>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </motion.div>
        </motion.div>
        {/* Motion div for Data Analysis section */}
        <motion.div
            ref={ref}
            initial={{ x: 0, opacity: 0 }} 
            animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className='skills-data'
        >
            <motion.h2
               initial={{ x: 0, opacity: 0 }} 
                animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            >
                Data Analysis
            </motion.h2>
            <motion.div
                 initial={{ x: 0, opacity: 0 }} 
                animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
                className='skills-data-analysis'
            >
                <Carousel
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    keyBoardControl={true}
                    customTransition="transform 500ms ease-in-out"
                    transitionDuration={500}
                    containerClass='carousel-container'
                    deviceType='desktop'
                    dotListClass='custom-dot-list-style'
                    itemClass='carousel-item-padding-40-px'
                >
                     {/* Mapping dataD array to render carousel items */}
                    {dataD.map((d, index) => (
                        <div key={index} className='skills-item'>
                            <div className='skills-image'>
                                <img src={d.img} alt='' />
                            </div>
                            <div>
                                <h4>{d.name}</h4>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </motion.div>
        </motion.div>
            </div>
        </motion.section>
    );
};

export default About;
