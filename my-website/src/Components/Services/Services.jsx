import React from "react";
import './Services.css'

const Services = () =>{
    return (
        <section className="Services-container">
            <h4>Expertise Capabilities</h4>
            <hr />
            <p className="Service-underP">Explore the synergy of expertise and capabilities that define my professional journey.</p>
            <div className="Services-content">
                <div className="Service-item">
                    <img src="./assets/images/web_dev.png" alt="" />
                    <h5>Web Developer</h5>
                    <p>I build dynamic and interactive web applications tailored to your specific needs.</p>
                </div>
                <div className="Service-item">
                    <img src="./assets/images/web_dev.png" alt="" />
                    <h5>Web Developer</h5>
                    <p>I build dynamic and interactive web applications tailored to your specific needs.</p>
                </div>
            </div>
        </section>
    );
};

export default Services