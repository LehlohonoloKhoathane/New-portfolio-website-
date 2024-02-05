import React from "react";   // Importing the react library to enable the components creation of react.
import './MobileNav.css'     // Importing the styles for the MobileNav component from the 'MobileNav.css' file.

// Defining a functional component named MobileNav, which takes isOpen and toggleMenu as props.
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