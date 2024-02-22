import React, { useEffect, useState } from "react";
import Slider from 'react-slick';
import './Work.css';
import { FaExternalLinkAlt } from 'react-icons/fa';

import { color } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import { motion } from 'framer-motion';

const Work = () => {
    //Settings for the carousel/slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768, 
                seettings: {
                    slidesToShow: 1, // Display 3 items on tablets
                    slidesToScroll: 1, // Scroll 3 items at a time
                }
            },
            {
                breakpoint: 480, 
                settings: {
                    slidesToShow: 1, // Display 2 items on mobile devices
                    slidesToScroll: 1, // Scroll 2 items at a time
                }
            }
        ]
    };

    const [isInView, setIsInView] = useState(false);
    const { ref: serviceRef, inView: serviceInView } = useInView({
      threshold: 0.5,
      triggerOnce: true,
    });
    const { ref: carouselRef, inView: carouselInView } = useInView({
      threshold: 0.5,
      triggerOnce: true,
    });
    const { ref: testimonialRef, inView: testimonialInView } = useInView({
      threshold: 0.5,
      triggerOnce: true,
    });

    useEffect(() => {
      setIsInView(serviceInView && carouselInView && testimonialInView);
    }, [serviceInView, carouselInView, testimonialInView]);


    // const [isInView, setIsInView] = useState(false);
    // const { ref, inView } = useInView({
    //   threshold: 0.5,
    //   triggerOnce: true,
    // });
  
    // useEffect(() => {
    //   setIsInView(inView);
    // }, [inView]);


    return (
        <motion.section
        ref={serviceRef}
        initial={{ x: 0, opacity: 0 }} 
        animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1, ease: 'easeOut' }} className="Services-container" id="Services-container">
            {/* Work Section */}
            <motion.h4 
            initial={{ x: 0, opacity: 0 }} 
                animate={{ x: isInView? 0 : -100, opacity: isInView ? 1 : 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}>Creations</motion.h4>
            <motion.hr  
            initial={{ x: 0, opacity: 0 }} 
                animate={{ x: isInView ? 0 : -100, opacity: isInView? 1 : 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}/>
            <motion.div 
            initial={{ x: 0, opacity: 0 }} 
                animate={{ x: isInView ? 0 : -100, opacity: isInView? 1 : 0 }}
                transition={{ duration: 1, ease: 'easeOut' }} className="service-subheading">
                <p className="Service-underP">Witness the harmony of <span>design</span> and <span>functionality</span>, immerse yourself in the visual allure of <span>innovations</span> Let my creations speak for themselves</p>
            </motion.div>

             {/* Carousel/slider for showcasing work */}
            <motion.div ref={carouselRef}
            initial={{ x: 0, opacity: 0 }} 
            animate={{ x: isInView? 0 : -100, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1, ease: 'easeOut' }} 
            className="service-content">

                <motion.div 
                initial={{ x: 0, opacity: 0 }} 
                animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="service-content-items">
                    <Slider {...settings}>
                    {/* Mapping over dataW to render each work item */}
                    {dataW.map((d) => (
                        <div className="service-item">
                            <div className="service-image">
                                <img src={d.img} alt="" />
                            </div>
                            <div>
                                <h4>{d.name}</h4>
                                <p>{d.description}</p>
                                <a href="">{d.link} < FaExternalLinkAlt/></a>
                            </div>
                        </div>
                    ))}
                    </Slider>
                </motion.div>
            </motion.div>

            {/* Testimonials section */}
            <motion.div className="work-testimonials">
                
                <motion.h2   ref={testimonialRef}
                initial={{ x: 0, opacity: 0 }} 
                animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}>Hear from those I have collaborated with</motion.h2> 
                
                <motion.hr 
                initial={{ x: 0, opacity: 0 }} 
                animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}/>

                <motion.div 
                initial={{ x: 0, opacity: 0 }} 
                animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
                transition={{ duration: 1, ease: 'easeOut' }} 
                className="testimonial-items">
                    {/* Testimonial items */}
                    <motion.div 
                    
                    initial={{ x: 0, opacity: 0 }} 
                    animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="item-testi">

                        <h3 className="name">King, <span>Ceo</span></h3>
                        <ImQuotesLeft className='myQuote'/>
                        <p>Mr Khoathane delivers excellence!Their coding skills & attention to detail made our project a success. Highly recommended for top-notch software development.</p><ImQuotesRight className='myQuote'/>
                    </motion.div>

                    <motion.div
                   
                   initial={{ x: 0, opacity: 0 }} 
                   animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
                   transition={{ duration: 1, ease: 'easeOut' }}
                    className="item-testi">
                        <h3 className="name">King, <span>Ceo</span></h3>
                        <ImQuotesLeft className='myQuote'/>
                        <p>Mr Khoathane delivers excellence!Their coding skills & attention to detail made our project a success. Highly recommended for top-notch software development.</p><ImQuotesRight className='myQuote'/>
                    </motion.div>

                    <motion.div
                    
                    initial={{ x: 0, opacity: 0 }} 
                    animate={{ x: isInView? 0 : -100, opacity: isInView? 1 : 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="item-testi">

                        <h3 className="name">King, <span>Ceo</span></h3>
                        <ImQuotesLeft className='myQuote'/>
                        <p>Mr Khoathane delivers excellence! Their coding skills & attention to detail made our project a success. Highly recommended for top-notch software development.</p><ImQuotesRight className='myQuote'/>
                    </motion.div>
                </motion.div> 
            </motion.div> 
        </motion.section>
    );
};

// Data for the work items
const dataW = [
    {
        img: `./assets/images/festival.png`,
        description: `Crafted this immersive Cape Town Festival website experience, seamlessly blending sleek design with responsive functionality.`,
        name:`Cape Town Festival`,
        link: <a href="https://github.com/LehlohonoloKhoathane/The-Cape_Town_Festival-Backend" target="blank">GitHub</a>
    },
    {
        img: `./assets/images/Dashboard.png`,
        description: `This is one of the data analysis projects that was created using power BI and SQL for a student dashboard.`,
        name:`Student Dashbord`,
        link: <a href="https://github.com/LehlohonoloKhoathane/Student_Dashboard" target="blank">GitHub</a>
    },
    {
        img: `./assets/images/websitecol.png`,
        description: `This website is for an IT group of young people to make them available on the internet and do some work.`,
        name:`Website`,
        link: <a href="https://midniters.netlify.app/" target="blank">Go to Website</a>
    }
]


export default Work;
