import React, { useRef } from "react";
import './Services.css'
import Slider from 'react-slick'


const Services = () =>{
    const sliderRef = useRef();
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="Services-container">
            <h4>Expertise Capabilities</h4>
            <hr />
            <p className="Service-underP">Explore the synergy of expertise and capabilities that define my professional journey.</p>
            <div className="service-content">
                <div className="service-content-items">
                    {data.map((d) => (
                        <div className="service-item">
                            <div className="service-image">
                                <img src={d.img} alt="" />
                            </div>
                            <div>
                                <p>{d.name}</p>
                                <p>{d.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </section>
    );
};

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
        description: `I examine and interpret data to extract meaningful  insights and make informed decisions.`
    }
]



export default Services

















{/* <Slider ref ={sliderRef} {...settings}>
                <div className="Services-content">
                    <div className="Service-item">
                        <img src="./assets/images/web_dev.png" alt="" />
                        <h5>Web Developer</h5>
                        <p>I build dynamic and interactive web applications tailored to your specific needs.</p>
                    </div>
                    <div className="Service-item">
                        <img src="./assets/images/mobile_dev.png" alt="" />
                        <h5>Mobile App Developer</h5>
                        <p>I craft visually appealing, user-friendly mobile apps for seamless experiences.</p>
                    </div>
                    <div className="Service-item">
                        <img src="./assets/images/mobile_dev.png" alt="" />
                        <h5>Data Analysis</h5>
                        <p>I examine and interpret data to extract meaningful  insights and make informed decisions.</p>
                    </div>
                    <div className="Service-item">
                        <img src="./assets/images/mobile_dev.png" alt="" />
                        <h5>Mobile App Developer</h5>
                        <p>I craft visually appealing, user-friendly mobile apps for seamless experiences.</p>
                    </div>
                </div>
            </Slider> */}