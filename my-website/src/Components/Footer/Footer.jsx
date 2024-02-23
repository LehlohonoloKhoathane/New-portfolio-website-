//Importing necessary dependancies for Footer
import React from "react";
import './Footer.css';
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

// Functional component for the footer section
const Footer = () => {
    return (
       <section className="footer-container">
        <div className="footer-content">
            <div className="footer-social">
                <h3>Socials</h3>
                <div className="socials">
                    <a href="https://www.instagram.com/king_techbard?igsh=M3QweXBqanZ2eW5s" target="_blank" rel="noreferrer"><FaInstagram className="socialIcon"/></a>
                    <a href="https://linkedin.com/in/lehlohonolo-khoathane-822503224" target="_blank" rel="noreferrer"><CiLinkedin className="socialIcon"/></a>
                    <a href="https://github.com/LehlohonoloKhoathane" target="_blank" rel="noreferrer"><FaGithub className="socialIcon"/></a>
                </div>
            </div>
            <div className="footer"> Copyright &copy; 2024. All rights reserved | Designed & Developed by Lehlohonolo Khoathane</div>
        </div>
       </section>
    );
};
export default Footer;
