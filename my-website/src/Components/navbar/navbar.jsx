//Importing necessary dependancies for nav bar
import React, { useState, useEffect, useRef } from 'react';
import './NavBar.css';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


const NavBar = () => {
  const [active, setActive] = useState('menuItems');
  const [toggleIcon, setToggleIcon] = useState('navToggler');
  const menuRef = useRef(null);

  const navToggle = () => {
    active === 'menuItems' ? setActive('menuItems menuActive') : setActive('menuItems');
    toggleIcon === 'navToggler' ? setToggleIcon('navToggler toggle') : setToggleIcon('navToggler');
  };

  const cancelMenu = () => {
    setActive('menuItems');
    setToggleIcon('navToggler');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest('.menu-item')
      ) {
        setActive('menuItems');
        setToggleIcon('navToggler');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
    {/* Logo */}
    
      <nav className='NavBar'>
      <img className='mylogo' src="./assets/images/myLogo.png" alt="logo" />           {/* Menu items */}
        <ul ref={menuRef} className={active}>
          <li className='navItem'>
            <ScrollLink
            className='menu-item'
            to='about-container'
            smooth={true}
            duration={500}
            onClick={cancelMenu}
            >
              About
            </ScrollLink>
          </li>
          <li className='navItem'>
            <ScrollLink className='menu-item'
            to='Services-container'
            smooth={true}
            duration={500}
            onClick={cancelMenu}>
              Services
            </ScrollLink>
          </li>
          <li className='navItem'>
          <ScrollLink className='menu-item'
            to='work-container'
            smooth={true}
            duration={500}
            onClick={cancelMenu}>
              Work
            </ScrollLink>
          </li>
          <li className='navItem'>
          <ScrollLink className='menu-item'
            to='contact-container'
            smooth={true}
            duration={500}
            onClick={cancelMenu}>
              Contact
            </ScrollLink>
          </li>
        </ul>
        {/* Menu toggler */}
        <div className={toggleIcon} onClick={navToggle}>
          {active === 'menuItems menuActive' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={cancelMenu}
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          )}
          {active !== 'menuItems menuActive' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12,15H7a3,3,0,0,1-3-3V7A3,3,0,0,1,7,4h5a3,3,0,0,1,3,3v5A3,3,0,0,1,12,15Z"/>
              <path d="M25,15H20a3,3,0,0,1-3-3V7a3,3,0,0,1,3-3h5a3,3,0,0,1,3,3v5A3,3,0,0,1,25,15Z"/>
              <path d="M12,28H7a3,3,0,0,1-3-3V20a3,3,0,0,1,3-3h5a3,3,0,0,1,3,3v5A3,3,0,0,1,12,28Z"/>
              <path d="M25,28H20a3,3,0,0,1-3-3V20a3,3,0,0,1,3-3h5a3,3,0,0,1,3,3v5A3,3,0,0,1,25,28Z"/>
            </svg>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
