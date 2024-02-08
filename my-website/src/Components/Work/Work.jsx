import React from 'react';
import Slider from 'react-slick';
import './Work.css';

const Work = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section className="work-container">
            <div className="work-content">
                <h2>Creations</h2>
                <hr />
                <p>Witness the harmony of <span>design</span> and <span>functionality</span>, and immerse yourself in the visual allure of <span>innovations</span>. Let my creations speak for themselves.</p>
                <div className="work-items">
                    <Slider {...settings}>
                    {data.map((d) => (
                        <div className="service-item">
                            <div className="service-image">
                                <img src={d.img} alt="" />
                            </div>
                            <div>
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
                        <div className="work-testimonials">
                            <div className="testimonial-items">
                                <div className="item-testi">
                                    <img src="./assets/images/khoathane.jpg" alt="testmonial" />
                                    <h2 className="name">King</h2>
                                    <h4 className="title">Ceo</h4>
                                    <p>Mr Khoathane delivers excellence!Their coding skills & attention to detail made our project a success. Highly recommended for top-notch software development.</p>
                                </div>
                                <div className="item-testi">
                                    <img src="./assets/images/khoathane.jpg" alt="testmonial" />
                                    <h2 className="name">King</h2>
                                    <h4 className="title">Ceo</h4>
                                    <p>Mr Khoathane delivers excellence!Their coding skills & attention to detail made our project a success. Highly recommended for top-notch software development.</p>
                                </div>
                                <div className="item-testi">
                                    <img src="./assets/images/khoathane.jpg" alt="testmonial" />
                                    <h2 className="name">King</h2>
                                    <h4 className="title">Ceo</h4>
                                    <p>Mr Khoathane delivers excellence!Their coding skills & attention to detail made our project a success. Highly recommended for top-notch software development.</p>
                                </div>
                            </div>
                        </div>
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



// const Work = () => {
//     return (
//         <section className="work-container">
//             <div className="work-content">
//                 <h2>Creations</h2>
//                 <hr />
//                 <p>Witness the harmony of <span>design</span> and <span>functionality</span>, and immerse yourself in the visual allure of <span>innovations</span>. Let my creations speak for themselves.</p>
//                 <div className="work-items">
//                     <div className="work-item-in">
//                         <img src="./assets/images/Dashboard.png" alt="project1" />
//                         <p>This is one of the data analysis projects that was created using power BI and SQL for a student dashboard.</p>
//                     </div>
//                     <div className="work-item-in">
//                         <img src="./assets/images/websitecol.png" alt="project2" />
//                         <p>This website is for an IT group of young people to make them available on the internet and do some work.</p>
//                     </div>
//                     <div className="work-item-in">
//                         <img src="./assets/images/festival.png" alt="project3" />
//                         <p>Crafted this immersive Cape Town Festival website experience, seamlessly blending sleek design with responsive functionality. It is not hosted as yet.</p>
//                     </div>
//                 </div>
//                 <div className="work-testimonials">
//                     <h2>Hear from those I have collaborated with</h2>
//                     <hr />
//                     <div className="testimonial-items">
//                         <div className="item-testi">
//                             <img src="./assets/images/khoathane.jpg" alt="testmonial" />
//                             <h2 className="name">King</h2>
//                             <h4 className="title">Ceo</h4>
//                             <p>Mr Khoathane delivers excellence!Their coding skills & attention to detail made our project a success. Highly recommended for top-notch software development.</p>
//                         </div>
//                         <div className="item-testi">
//                             <img src="./assets/images/khoathane.jpg" alt="testmonial" />
//                             <h2 className="name">King</h2>
//                             <h4 className="title">Ceo</h4>
//                             <p>Mr Khoathane delivers excellence!Their coding skills & attention to detail made our project a success. Highly recommended for top-notch software development.</p>
//                         </div>
//                         <div className="item-testi">
//                             <img src="./assets/images/khoathane.jpg" alt="testmonial" />
//                             <h2 className="name">King</h2>
//                             <h4 className="title">Ceo</h4>
//                             <p>Mr Khoathane delivers excellence!Their coding skills & attention to detail made our project a success. Highly recommended for top-notch software development.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Work