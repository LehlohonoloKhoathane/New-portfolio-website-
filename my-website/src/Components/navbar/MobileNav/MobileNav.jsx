import React from "react";
import './MobileNav.css'

const MobileNav = ( {isOpen, toggleMenu}) => {
    return (
        <>
            <div
                className={`mobile-menu ${isOpen ? 'active' : ''}`} 
                onClick={toggleMenu}
            >
                <div className="mobile-menu-container">
                    <img className="mylogo" src="./assets/images/myLogo.png" alt="" />

                    <ul>
                        <li>
                            <a className="menu-item" >About</a>
                        </li>
                        <li>
                            <a className="menu-item" >Services</a>
                        </li>
                        <li>
                            <a className="menu-item" >Work</a>
                        </li>
                        <li>
                            <a className="menu-item" >Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MobileNav;