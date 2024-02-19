import React, {useState, useEffect} from 'react';
import './NavBar.css'
import MobileNav from './MobileNav/MobileNav';
import {Link} from 'react-scroll'
// import { FaBars, FaTimes } from 'react-icons/fa'

const NavBar = () => {
   //Managing the mobile menu
  const [openMenu, setOpenMenu] = useState(false);
  //Managing the visibility of the navbar
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

   //Function to toggle the mobile menu
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  
  //Function to handle scroll event and adjust visibility of navbar
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(
      (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );
    setPrevScrollPos(currentScrollPos);
  };

  //Effect to add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
     //Cleanup function to remove event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <>
    {/* Render the mobile navigation menu */}
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>

      {/* Render the desktop navigation */}
      <nav  className={`nav-wrapper ${visible ? 'visible' : 'hidden'}`} >
        <div className='nav-content'>
           {/* Logo */}
          <img className='mylogo' src="./assets/images/myLogo.png" alt="logo" />
           {/* Menu items */}
          <ul>
            <li>
              <a className='menu-item' href='#about-container'>About</a>
            </li>
            <li>
              <a className='menu-item' href='#Services-container'>Services</a>
            </li>
            <li>
              <a className='menu-item' href='#work-container' ><Link to = 'work-container' span={true} smooth={true}></Link>Work</a>
            </li>
            <li>
              <a className='menu-item' href='#contact-container' >Contact</a>
            </li>
          </ul>
          
          {/* Menu button for mobile */}
          <div className='menu-button' onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12,15H7a3,3,0,0,1-3-3V7A3,3,0,0,1,7,4h5a3,3,0,0,1,3,3v5A3,3,0,0,1,12,15Z"/>
            <path d="M25,15H20a3,3,0,0,1-3-3V7a3,3,0,0,1,3-3h5a3,3,0,0,1,3,3v5A3,3,0,0,1,25,15Z"/>
            <path d="M12,28H7a3,3,0,0,1-3-3V20a3,3,0,0,1,3-3h5a3,3,0,0,1,3,3v5A3,3,0,0,1,12,28Z"/>
            <path d="M25,28H20a3,3,0,0,1-3-3V20a3,3,0,0,1,3-3h5a3,3,0,0,1,3,3v5A3,3,0,0,1,25,28Z"/>
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
};

{/* Exporting the Navigation bar to make it to be able to be imported */}
export default NavBar;