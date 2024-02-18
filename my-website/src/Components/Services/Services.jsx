import React from "react";
import './Services.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const Services = () =>{
    
    //Settings for the Slider component
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
            {/* Services Section */}
            <h4>Expertise Capabilities</h4>
            <hr />
            <div className="service-subheading">
                <p className="Service-underP">Explore the synergy of expertise and capabilities that define my professional journey.</p>
            </div>
            <div className="service-content">
                <div className="service-content-items">
                    {/* Carousel/slider for showcasing services */}
                    <Slider {...settings}> 
                    {/* Mapping over data to render each service item */}
                    {data.map((d) => (
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
            
        </section>
    );
};

//Data for the service items
const data = [
    {
        name: `Web Developer`,
        img: `./assets/images/web_dev.png`,
        description: `I build dynamic and interactive web applications tailored to your specific needs.`
    },
    {
        name: `Mobile App Developer`,
        img: `./assets/images/mobile_dev.png`,
        description: `I craft visually appealing, user-friendly mobile apps for seamless experiences.`
    },
    {
        name: `Data Analysis`,
        img: `./assets/images/dataA.png`,
        description: `I analyze and interpret data to derive valuable insights, enabling informed decision-making.`
    },
    {
        name: `UX/UI Design`,
        img: `./assets/images/UX.png`,
        description: `I create user friendly and visually appealing interfaces for digital products.`
    }
]

export default Services


