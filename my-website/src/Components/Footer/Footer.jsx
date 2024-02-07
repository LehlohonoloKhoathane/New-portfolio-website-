import React from "react";
import './Footer.css';
import { FaGithub } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
       <section className="footer-container">
        <div className="footer-content">
            <div className="footer-social">
                <h3>Socials</h3>
                <FaGithub />
                <BsLinkedin />
                <FaInstagram />
                <div className="socials"></div>
            </div>
            <div className="footer"> Copyright &copy; 2024. All rights reserved | Designed & Developed by Lehlohonolo Khoathane</div>
        </div>
       </section>
    );
};
export default Footer;
