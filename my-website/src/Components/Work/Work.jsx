import React, { useEffect, useState } from "react";
import Slider from 'react-slick';
import './Work.css';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import Dashboard from "../../assets/images/Dashboard.PNG";
import Webs from "../../assets/images/websitecol.png";
import Festive from "../../assets/images/festival.png";

const Work = () => {
    // Settings for the carousel/slider
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
                }
            },
            {
                breakpoint: 480, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

   // State and ref for detecting when the service section is in view
   const [isServiceInView, setIsServiceInView] = useState(false);
   const { ref: serviceRef, inView: serviceInView } = useInView({
       threshold: 0.5,
       triggerOnce: true,
   });

   // State and ref for detecting when the testimonials section is in view
   const [isTestimonialsInView, setIsTestimonialsInView] = useState(false);
   const { ref: testimonialsRef, inView: testimonialsInView } = useInView({
       threshold: 0.5,
       triggerOnce: true,
   });

   // Update the state when the service section comes into view
   useEffect(() => {
       setIsServiceInView(serviceInView);
   }, [serviceInView]);

   // Update the state when the testimonials section comes into view
   useEffect(() => {
       setIsTestimonialsInView(testimonialsInView);
   }, [testimonialsInView]);


    // Render the Work component
    return (
        <motion.div className="Services-container" id="work-container">
            {/* Work Section */}
            <motion.h4 
            ref={serviceRef} 
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: isServiceInView ? 0 : -100, opacity: isServiceInView ? 1 : 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}>Creations</motion.h4>
            <motion.hr ref={serviceRef} 
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: isServiceInView ? 0 : -100, opacity: isServiceInView ? 1 : 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}/>
            <motion.div className="service-subheading">
                <motion.p ref={serviceRef} 
                initial={{ x: 0, opacity: 0 }}
                animate={{ x: isServiceInView ? 0 : -100, opacity: isServiceInView ? 1 : 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}className="Service-underP">Witness the harmony of <span>design</span> and <span>functionality</span>, immerse yourself in the visual allure of <span>innovations</span> Let my creations speak for themselves.</motion.p>
            </motion.div>

            {/* Carousel/slider for showcasing work */}
            <motion.div 
            ref={serviceRef} 
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: isServiceInView ? 0 : -100, opacity: isServiceInView ? 1 : 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="service-content">
                <motion.div className="service-content-items">
                    <Slider {...settings}>
                        {/* Mapping over dataW to render each work item */}
                        {dataW.map((d) => (
                            <div className="service-item" key={d.name}>
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
            <motion.div
            ref={testimonialsRef} 
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: isTestimonialsInView ? 0 : -100, opacity: isTestimonialsInView ? 1 : 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="work-testimonials">
                <motion.h2>Hear from those I have collaborated with</motion.h2>
                <motion.hr />
                <p className="testPar">From clients to collaborators, their words highlight <span> my commitment to excellence and dedication</span> I bring to every project.</p>
                <motion.div className="testimonial-items">
                    {/* Testimonial items */}
                    <motion.div className="item-testi">
                        <h3 className="name">Aqeel Honslo, <span> Software Developer</span></h3>
                        <ImQuotesLeft className='myQuote'/>
                        <p>Lehlohonolo delivers excellence! Their coding skills & attention to detail made our project a success. Highly recommended for top-notch software development.</p><ImQuotesRight className='myQuote'/>
                    </motion.div>
                    <motion.div className="item-testi">
                        <h3 className="name">Chuma Raxothi,<span> Network Engineer</span></h3>
                        <ImQuotesLeft className='myQuote'/>
                        <p>Thanks to Lehlohonolo's contributions, our project was completed on time and exceeded our expectations. I would highly recommend him to anyone looking for a talented and reliable software developer.</p><ImQuotesRight className='myQuote'/>
                    </motion.div>
                    <motion.div className="item-testi">
                        <h3 className="name">Mookgo Lebaka,<span> Client</span></h3>
                        <ImQuotesLeft className='myQuote'/>
                        <p>I hired Lehlohonolo to develop a custom software solution for my business, and I couldn't be happier with the results. He took the time to understand my needs and delivered a product that exceeded my expectation</p><ImQuotesRight className='myQuote'/>
                    </motion.div>
                </motion.div> 
            </motion.div> 
        </motion.div>
    );
};

// Data for the work items
const dataW = [
    {
        img: Festive,
        description: `Crafted this immersive Cape Town Festival website experience, seamlessly sleek design with responsive functionality.`,
        name:`Cape Town Festival`,
        link: <a href="https://github.com/LehlohonoloKhoathane/The-Cape_Town_Festival-Backend" target="blank">GitHub</a>
    },
    {
        img: Dashboard,
        description: `This is one of the data analysis projects that was created using power BI and SQL for a student dashboard.`,
        name:`Student Dashbord`,
        link: <a href="https://github.com/LehlohonoloKhoathane/Student_Dashboard" target="blank">GitHub</a>
    },
    {
        img: Webs,
        description: `This website is for an IT group of young people to make them available on the internet and do some work.`,
        name:`Website`,
        link: <a href="https://midniters.netlify.app/" target="blank">Go to Website</a>
    }
]

export default Work;
