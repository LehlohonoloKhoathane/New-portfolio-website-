import React from "react";
import './Work.css'

const Work = () => {
    return (
        <section className="work-container">
            <div className="work-content">
                <h2>Creations</h2>
                <hr />
                <p>Witness the harmony of <span>design</span> and <span>functionality</span>, and immerse yourself in the visual allure of <span>innovations</span>. Let my creations speak for themselves.</p>
                <div className="work-items">
                    <div className="work-item-in">
                        <img src="./assets/images/Dashboard.png" alt="project1" />
                        <p>This is one of the data analysis projects that was created using power BI and SQL for a student dashboard.</p>
                    </div>
                    <div className="work-item-in">
                        <img src="./assets/images/websitecol.png" alt="project2" />
                        <p>This website is for an IT group of young people to make them available on the internet and do some work.</p>
                    </div>
                    <div className="work-item-in">
                        <img src="./assets/images/festival.png" alt="project3" />
                        <p>Crafted this immersive Cape Town Festival website experience, seamlessly blending sleek design with responsive functionality. It is not hosted as yet.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work