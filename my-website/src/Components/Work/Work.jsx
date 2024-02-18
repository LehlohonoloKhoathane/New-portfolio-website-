import React, { useState } from 'react';
import Slider from 'react-slick';
import './Work.css';
import { color } from 'framer-motion';

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

    return (
        <section className="Services-container" id="Services-container">
            {/* Work Section */}
            <h4>Creations</h4>
            <hr />
            <div className="service-subheading">
                <p className="Service-underP">Witness the harmony of <span>design</span> and <span>functionality</span>, immerse yourself in the visual allure of <span>innovations</span> Let my creations speak for themselves</p>
            </div>
             {/* Carousel/slider for showcasing work */}
            <div className="service-content">
                <div className="service-content-items">
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
                            </div>
                        </div>
                    ))}
                    </Slider>
                </div>
            </div>

            {/* Testimonials section */}
            <div className="work-testimonials">
                <h2>Hear from those I have collaborated with</h2> 
                <hr /> 
                <div className="testimonial-items">
                    {/* Testimonial items */}
                    <div className="item-testi">
                        <img src="./assets/images/khoathane.jp" alt="testmonial" />
                        <h3 className="name">King, <span>Ceo</span></h3>
                        <p>Mr Khoathane delivers excellence!Their coding skills & attention to detail made our project a success. Highly recommended for top-notch software development.</p>
                    </div>
                    <div className="item-testi">
                        <img src="./assets/images/khoathane.jp" alt="testmonial" />
                        <h3 className="name">King, <span>Ceo</span></h3>
                        <p>Mr Khoathane delivers excellence!Their coding skills & attention to detail made our project a success. Highly recommended for top-notch software development.</p>
                    </div>
                    <div className="item-testi">
                        <img src="./assets/images/khoathane.jp" alt="testmonial" />
                        <h3 className="name">King, <span>Ceo</span></h3>
                        <p>Mr Khoathane delivers excellence! Their coding skills & attention to detail made our project a success. Highly recommended for top-notch software development.</p>
                    </div>
                </div> 
            </div> 
        </section>
    );
};

// Data for the work items
const dataW = [
    {
        img: `./assets/images/festival.png`,
        description: `Crafted this immersive Cape Town Festival website experience, seamlessly blending sleek design with responsive functionality.`,
        name:`Cape Town Festival`
    },
    {
        img: `./assets/images/Dashboard.png`,
        description: `This is one of the data analysis projects that was created using power BI and SQL for a student dashboard.`,
        name:`Student Dashbord`
    },
    {
        img: `./assets/images/websitecol.png`,
        description: `This website is for an IT group of young people to make them available on the internet and do some work.`,
        name:`Website`
    }
]


export default Work;
