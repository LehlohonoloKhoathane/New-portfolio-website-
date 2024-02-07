import React from "react";
import './Footer.css';
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";


const Footer = () => {
    return (
       <section className="footer-container">
        <div className="footer-content">
            <div className="footer-social">
                <h3>Socials</h3>
                <div className="socials">
                <FaInstagram />
                <CiLinkedin />
                <FaGithub />
                </div>
            </div>
            <div className="footer"> Copyright &copy; 2024. All rights reserved | Designed & Developed by Lehlohonolo Khoathane</div>
        </div>
       </section>
    );
};
export default Footer;
