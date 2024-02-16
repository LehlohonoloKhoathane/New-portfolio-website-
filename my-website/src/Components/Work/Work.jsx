import React, { useState } from 'react';
import Slider from 'react-slick';
import './Work.css';
import { color } from 'framer-motion';

const Work = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768, // Adjust breakpoint as needed
                settings: {
                    slidesToShow: 1, // Display two items at a time on tablets
                    slidesToScroll: 1, // Scroll two items at a time
                }
            }
        ]
    };

    const [selected, setSelected] = useState(0);
    const tLength = data.length;
    return (
        <section className="work-container" id='work-container'>
                <h2>Creations</h2>
                <hr />
                <div className='work-content-subheading'>
                    <p className='work-content-p'>Witness the harmony of <span>design</span> and <span>functionality</span>, and immerse yourself in the visual allure of <span>innovations</span>. Let my creations speak for themselves.</p>
                </div>
                <div className="work-content">
                    <div className='work-content-left'>
                        <span>{data[selected].description}</span>{" "} <br />
                            <span>
                                <span style={{color: '#09BE67'}}>
                                    {data[selected].name}
                                </span>
                            </span>
                    </div>
                    <div className='work-content-right'>
                        <div></div>
                        <div></div>
                        <img src={data[selected].img} alt="" />
                        <div className='testimonial-arrows'>
                            <img onClick={() => {selected === 0 ? setSelected(tLength - 1) : setSelected((prev) => prev - 1);}} src="./assets/images/rightArrow.png" alt="" />
                            <img onClick={() => {selected === tLength - 1 ? setSelected(0) : setSelected((prev) => prev + 1);}} src="./assets/images/leftArrow.png" alt="" />
                        </div>
                    </div>
                </div>
                
                {/* <div className="work-testimonials">
                    <div className='left-part'>
                        <span>Hear</span>
                        <span>from those I</span>
                        <span>have collaborated with</span>
                    </div>
                    <h2>Hear from those I have collaborated with</h2> 
                     <hr /> 
                     <div className="testimonial-items">
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
                </div> */}
        </section>
    );
};



const data = [
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
