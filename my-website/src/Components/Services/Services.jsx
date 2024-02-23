//Import necessary dependencies from React and other libraries
import React, { useEffect, useState } from "react";
import "./Services.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

//Defining the Services component
const Services = () => {

   //Configuration for the Slick slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

   //State and ref for detecting when the section is in view
  const [isInView, setIsInView] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

   //Update the state when the section comes into view
  useEffect(() => {
    setIsInView(inView);
  }, [inView]);

  //Render the Services component
  return (
    <motion.section 
    ref={ref}
    initial={{ x: 0, opacity: 0 }}
    animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
    transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
    className="Services-container" id="Services-container">
       {/*Animate the heading*/}
      <motion.h4 >Expertise Capabilities</motion.h4>
      {/* Animate the horizontal rule */}
      <motion.hr />
      <div className="service-subheading">
        {/* Animate the paragraph */}
        <motion.p className="Service-underP">
          Explore the synergy of expertise and capabilities that define my <span> professional journey.</span>
        </motion.p>
      </div>
      <div className="service-content">
           {/* Animate the service content */}
        <motion.div
          className="service-content-items"
          initial={{ x: 0, opacity: 0 }} 
          animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
            {/* Render the Slick slider with service items */}
          <Slider {...settings}>
            {data.map((d) => (
              <div className="service-item" key={d.name}>
                <div className="service-image">
                  <img src={d.img} alt="" />
                </div>
                <div>
                  <h4>{d.name}</h4>
                  <p>{d.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </motion.section>
  );
};

// Data for different services
const data = [
  {
    name: `Web Developer`,
    img: `./assets/images/web_dev.png`,
    description: `I build dynamic and interactive web applications tailored to your specific needs.`,
  },
  {
    name: `Mobile App Developer`,
    img: `./assets/images/mobile_dev.png`,
    description: `I craft visually appealing, user-friendly mobile apps for seamless experiences.`,
  },
  {
    name: `Data Analysis`,
    img: `./assets/images/dataA.png`,
    description: `I analyze and interpret data to derive valuable insights, enabling informed decision-making.`,
  },
  {
    name: `UX/UI Design`,
    img: `./assets/images/UX.png`,
    description: `I create user friendly and visually appealing interfaces for digital products.`,
  },
];

// Export the Services component
export default Services;
