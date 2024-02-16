import React from "react";
import './Home.css';

const Home = () => {
    return (
        <section className="home-container">
            <div className="blur HomeBlur"></div>
            <div className="home-content">
                <div className="heading-container">
                    <h2> <span className="strokeText">Welcome</span> , Embark on a journey through landscape of innovation.</h2>
                </div>
                <hr className="custom-hr"/>
                <div className="paragraph-container">
                    <p>Whether you are seeking a developer or to bring ideas to life or seeking innovative solutions, you are on the right place.</p>
                </div>
                <div className="links-container">
                    <a href=""><span>See Work</span></a>
                    <a href=""><span>Downoload Cv</span></a>
                </div>
            </div>
        </section>
    );
};

export default Home;