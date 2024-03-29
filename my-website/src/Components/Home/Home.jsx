import React from "react";
import './Home.css';
import { motion } from "framer-motion";

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

//Variants for slider animation
const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",                     //Slide to the left
        transition: {
            repeat: Infinity,           //Repeat indefinitely
            repeatType:"mirror",        //Reverse direction on repeat
            duration: 20,               // Animation duration
        },
    },
};

//Function to handle the smooth scrolling
function handleScroll(event) {
    event.preventDefault();
  
    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
  
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }
  

/* Home section content */
const Home = () => {
    return (
        <motion.section className="home-container" id="home-container" variants={textVariants} initial="initial" animate="animate">
            <div className="blur HomeBlur"  variants={textVariants}></div>
            <motion.div className="home-content"  variants={textVariants}>
                
                <motion.div className="heading-container"  variants={textVariants}>
                    <motion.h2>  Welcome , Embark on a journey through landscape of innovation.</motion.h2>
                </motion.div>
                <motion.hr  className="custom-hr"/>

                <motion.div className="paragraph-container"  variants={textVariants}>
                    <motion.p  variants={textVariants}>Whether you are seeking a developer or to bring ideas to life or seeking innovative solutions, you are on the right place.</motion.p>
                </motion.div>

                <div className="links-container">
                    <motion.a  href="#work-container" onClick={handleScroll}><span  variants={textVariants}>See Work</span></motion.a>
                    <motion.a href="https://drive.google.com/file/d/11QZcGIzMg_JJwe1_ned3JGNJWFkzELTD/view?usp=sharing" target="blank"><span  variants={textVariants}>Downoload Cv</span></motion.a>
                </div>
                <motion.div className="slidingTextcontainer" variants={sliderVariants} initial="initial" animate="animate">Full Stack Software Developer</motion.div>
            </motion.div>
           
        </motion.section>
    );
};

export default Home;