import React from 'react';
import Slider from 'react-slick';
import './Work.css';

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

    return (
        <section className="work-container" id='work-container'>
                <h2>Creations</h2>
                <hr />
                <div className='work-content-subheading'>
                    <p className='work-content-p'>Witness the harmony of <span>design</span> and <span>functionality</span>, and immerse yourself in the visual allure of <span>innovations</span>. Let my creations speak for themselves.</p>
                </div>
                <div className="work-content">
                    <Slider {...settings}>
                    {data.map((d) => (
                        <div className="work-content-items" >
                            <div className="work-image">
                                <img src={d.img} alt="" />
                            </div>
                            <div className='work-item-decription'>
                                <p>{d.description}</p>
                            </div>
                        </div>
                    ))}
                    </Slider>
                </div>
                <div className="work-testimonials">
                    <h2>Hear from those I have collaborated with</h2>
                    <hr />
                    <div className="testimonial-items">
                        <div className="item-testi">
                            <img src="./assets/images/khoathane.jpg" alt="testmonial" />
                            <h3 className="name">King, <span>Ceo</span></h3>
                            <p>Mr Khoathane delivers excellence!Their coding skills & attention to detail made our project a success. Highly recommended for top-notch software development.</p>
                        </div>
                        <div className="item-testi">
                            <img src="./assets/images/khoathane.jpg" alt="testmonial" />
                            <h3 className="name">King, <span>Ceo</span></h3>
                            <p>Mr Khoathane delivers excellence!Their coding skills & attention to detail made our project a success. Highly recommended for top-notch software development.</p>
                        </div>
                        <div className="item-testi">
                            <img src="./assets/images/khoathane.jpg" alt="testmonial" />
                            <h3 className="name">King, <span>Ceo</span></h3>
                            <p>Mr Khoathane delivers excellence! Their coding skills & attention to detail made our project a success. Highly recommended for top-notch software development.</p>
                        </div>
                    </div>
                </div>
        </section>
    );
};



const data = [
    {
        img: `./assets/images/festival.png`,
        description: `Crafted this immersive Cape Town Festival website experience, seamlessly blending sleek design with responsive functionality. It is not hosted as yet.`
    },
    {
        img: `./assets/images/Dashboard.png`,
        description: `This is one of the data analysis projects that was created using power BI and SQL for a student dashboard.`
    },
    {
        img: `./assets/images/websitecol.png`,
        description: `This website is for an IT group of young people to make them available on the internet and do some work.`
    }
]


export default Work;
