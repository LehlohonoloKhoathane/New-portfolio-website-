import React, { useEffect, useState } from "react";
import "./Services.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
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

  const [isInView, setIsInView] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    setIsInView(inView);
  }, [inView]);

  return (
    <section className="Services-container" id="Services-container">
      <motion.h4 initial={{ x: "-100%" }}
          animate={{ x: isInView ? 0 : "-100%" }}
          transition={{ duration: 1, ease: "easeOut" }}>Expertise Capabilities</motion.h4>
      <motion.hr initial={{ x: "-100%" }}
          animate={{ x: isInView ? 0 : "-100%" }}
          transition={{ duration: 1, ease: "easeOut" }} />
      <div className="service-subheading">
        <motion.p initial={{ x: "-100%" }}
          animate={{ x: isInView ? 0 : "-100%" }}
          transition={{ duration: 1, ease: "easeOut" }} className="Service-underP">
          Explore the synergy of expertise and capabilities that define my
          professional journey.
        </motion.p>
      </div>
      <div className="service-content" ref={ref}>
        <motion.div
          className="service-content-items"
          initial={{ x: "-100%" }}
          animate={{ x: isInView ? 0 : "-100%" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
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
    </section>
  );
};

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

export default Services;
