import React from "react";
import './Home.css';

const Home = () => {
    return (
        <section className="home-container">
            <div className="home-content">
                <h2> Welcome, Embark on a journey through landscape of innovation.</h2>
                <hr className="custom-hr"/>
                <p>Whether you are seeking a developer or to bring ideas to life or seeking innovative solutions, you are on the right place.</p>
                <div className="links-container">
                    <a href=""><span>See Work</span></a>
                    <a href=""><span>Downoload Cv</span></a>
                </div>
            </div>
        </section>
    );
};

export default Home;