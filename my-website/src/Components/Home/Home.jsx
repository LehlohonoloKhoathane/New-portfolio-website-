import React from "react";
import './Home.css';
import { motion } from "framer-motion";

const textVariants = {
    initial: {
        x: -500,
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

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType:"mirror",
            duration: 20,
        },
    },
};

const Home = () => {
    return (
        <motion.section className="home-container" variants={textVariants} initial="initial" animate="animate">
            <div className="blur HomeBlur"  variants={textVariants}></div>
            <motion.div className="home-content"  variants={textVariants}>
                <motion.div className="heading-container"  variants={textVariants}>
                    <motion.h2> <span className="strokeText"  variants={textVariants}>Welcome</span> , Embark on a journey through landscape of innovation.</motion.h2>
                </motion.div>
                <hr className="custom-hr"/>
                <motion.div className="paragraph-container"  variants={textVariants}>
                    <motion.p  variants={textVariants}>Whether you are seeking a developer or to bring ideas to life or seeking innovative solutions, you are on the right place.</motion.p>
                </motion.div>
                <div className="links-container">
                    <motion.a href=""><span  variants={textVariants}>See Work</span></motion.a>
                    <motion.a href=""><span  variants={textVariants}>Downoload Cv</span></motion.a>
                </div>
            </motion.div>
            <motion.div className="slidingTextcontainer" variants={sliderVariants} initial="initial" animate="animate">Full Stack Software Developer</motion.div>
        </motion.section>
    );
};

export default Home;