//importing necessary dependencies for about section
import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './VerticalLine.css';
import VerticalLine from './VerticalLine'
import './About.css';
import myProfile from "../../assets/images/picPro.jpg"; 
import myPic from "../../assets/images/lehlohonolo.jpg";
import image1 from "../../assets/images/django-py.png";
import image2 from "../../assets/images/git.png";
import image3 from "../../assets/images/html.png";
import image4 from "../../assets/images/C++.png";
import image5 from "../../assets/images/Java.png";
import image6 from "../../assets/images/vscode.png";
import image7 from "../../assets/images/tailwind.png";
import image8 from "../../assets/images/nodejs.png";
import image9 from "../../assets/images/figma.png";
import image10 from "../../assets/images/javas.png";
import image11 from "../../assets/images/react.png";
import image12 from "../../assets/images/Flutter.png";
import image13 from "../../assets/images/mongodb.png";
import image14 from "../../assets/images/r-learn.png";
import image15 from "../../assets/images/scikit-learn.png";
import image16 from "../../assets/images/SPSS.webp";
import image17 from "../../assets/images/Excel.png";
import image18 from "../../assets/images/sql.png";
import image19 from "../../assets/images/powerBI.png";
import image20 from "../../assets/images/python-logo.png";
import image21 from "../../assets/images/azure-.png";
import image22 from "../../assets/images/angular.png";
import image23 from "../../assets/images/vue-removebg-preview.png";
import image24 from "../../assets/images/Wordpress_Blue.png";
import image25 from "../../assets/images/firebase.png";
import image26 from "../../assets/images/New-Profile.jpeg"


const About = () => {
    
    // Data for technology expertise
    const dataT = [
        {
            name: `Node.Js`,
            img: image8
        },
        {
            name: `Git`,
            img: image2
        },
        {
            name: `Vs Code`,
            img: image6
        },
        {
            name: `Flutter`,
            img: image12
        },
        {
            name: `TailWind`,
            img: image7 
        },
        {
            name: `React.Js / Native`,
            img: image11
        },
        {
            name: `Django`,
            img: image1
        },
        {
            name: `Figma`,
            img: image9
        },
        {
            name: `JavaScript`,
            img: image5
        },
        {
            name: `Java`,
            img: image10
        },
        {
            name: `Html & CSS`,
            img: image3
        },
        {
            name: `C++`,
            img: image4
        },
        {
            name: `Vue.Js`,
            img: image23
        },
        {
            name: `Angular`,
            img: image22
        },
        {
            name: `Wordpress`,
            img: image24
        }
    ]

    // Data for data analysis expertise
    const dataD = [
        {
            name: `MongoDb`,
            img: image13
        },
        {
            name: `R Language`,
            img: image14 
        },
        {
            name: `SPSS`,
            img: image16
        },
        {
            name: `Excel`,
            img: image17
        },
        {
            name: `Power BI`,
            img: image19
        },
        {
            name: `Scikit-Learn`,
            img: image15
        },
        {
            name: `SQL/NoSql`,
            img: image18 
        },
        {
            name:`Python`,
            img: image20
        },
        {
            name: `Firebase`,
            img: image25
        },
        {
            name: `Azure`,
            img: image21
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

    const textVariants = {
        initial: {
            x: -100,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <motion.section
            variants={textVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="about-container"
            id="about-container"
        >
            <motion.h4 variants={textVariants}>
                The Person behind the work
            </motion.h4>

            <motion.hr variants={textVariants} />

            <motion.h6 variants={textVariants}>
                Lehlohonolo Khoathane
            </motion.h6>

            <motion.div variants={textVariants} className="about-content">
                <motion.div variants={textVariants} className="imageCover">
                    <motion.p variants={textVariants} className="about-heading">
                        Data & Analytics <VerticalLine height="15px" /> Software Engineer
                    </motion.p>
                </motion.div>

                <motion.div variants={textVariants} className="about">
                    <motion.img
                        variants={textVariants}
                        className="profile-picture"
                        src={image26}
                        alt="my profile"
                    />

                    <motion.div variants={textVariants} className="about-info">
                        <motion.p variants={textVariants} className="about-description">
                            I'm a data & analytics professional with a strong academic background in{" "}
                            <span className="degree">
                                BSc Computer Science and Statistics,
                            </span>{" "}
                            currently completing{" "}
                            <span className="degree">
                                BCom Honours Information Systems
                            </span>{" "}
                            at UCT. I bring hands-on experience in data analysis, business
                            intelligence, and software development, with a focus on building
                            scalable, data-driven solutions that support informed decision-making.
                            My experience spans data analysis, extraction, cleaning and transformation, Software
                            development and designing BI solutions that convert raw data into
                            meaningful, actionable insights.
                        </motion.p>
                    </motion.div>
                </motion.div>
            </motion.div>

            <div className="skills-container">
                <motion.h1
                    variants={textVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    Tech Expertise
                </motion.h1>

                <motion.hr
                    variants={textVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                    className="horizontal-line"
                />

                <motion.div
                    className="skills-subheading"
                    variants={textVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.p variants={textVariants}>
                        I bring dynamic set of skills to propel projects forward. Dive deeper
                        into my <span>technological prowess.</span>
                    </motion.p>
                </motion.div>

                {/* Motion div for Data Analysis section */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="skills-data"
                >
                    <motion.h2
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    >
                        Data Analysis
                    </motion.h2>

                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                        className="skills-data-analysis"
                    >
                        <Carousel
                            responsive={responsive}
                            ssr={true}
                            infinite={true}
                            keyBoardControl={true}
                            customTransition="transform 500ms ease-in-out"
                            transitionDuration={500}
                            containerClass="carousel-container"
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
                    </motion.div>
                </motion.div>

                {/* Motion div for Development section */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="skills-development"
                    >
                        <motion.h2
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        >
                            Software Development
                        </motion.h2>

                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                        className="skills-dev"
                    >
                        <Carousel
                            responsive={responsive}
                            ssr={true}
                            infinite={true}
                            keyBoardControl={true}
                            customTransition="transform 500ms ease-in-out"
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

                                    <div className="skill-name">
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
