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
                    <img className="myLogo" src="" alt="" />
                </div>
            </div>
        </>
    )
}

export default MobileNav;