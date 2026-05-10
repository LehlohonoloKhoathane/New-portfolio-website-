import React from "react";
import "./Home.css";
import { motion } from "framer-motion";

// Variants for text animation
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

// Variants for slider animation
const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};

// Function to handle the smooth scrolling
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
        <motion.section
            className="home-container"
            id="home-container"
            variants={textVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="blur HomeBlur"></div>

            <motion.div className="home-content" variants={textVariants}>
                <motion.div className="heading-container" variants={textVariants}>
                    <motion.h2 variants={textVariants}>
                        Welcome , Embark on a journey through landscape of innovation.
                    </motion.h2>
                </motion.div>

                <motion.hr className="custom-hr" variants={textVariants} />

                <motion.div className="paragraph-container" variants={textVariants}>
                    <motion.p variants={textVariants}>
                        Whether you are seeking a developer or to bring ideas to life or
                        seeking innovative solutions, you are on the right place.
                    </motion.p>
                </motion.div>

                <motion.div className="links-container" variants={textVariants}>
                    <motion.a
                        href="#work-container"
                        onClick={handleScroll}
                        variants={textVariants}
                    >
                        <span>See Work</span>
                    </motion.a>

                    <motion.a
                        href="https://drive.google.com/file/d/1Yib-CdGMvN5VXwuSODBagaXu7WZ2xjSm/view?usp=drive_link"
                        target="blank"
                        variants={textVariants}
                    >
                        <span>Downoload Cv</span>
                    </motion.a>
                </motion.div>

                <motion.div
                    className="slidingTextcontainer"
                    variants={sliderVariants}
                    initial="initial"
                    animate="animate"
                >
                    Full Stack Software Developer
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Home;