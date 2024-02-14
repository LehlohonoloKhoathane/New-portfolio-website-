import React, {useState} from 'react';
import './NavBar.css'
import MobileNav from './MobileNav/MobileNav';
// import { FaBars, FaTimes } from 'react-icons/fa'

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>

      <nav className='nav-wrapper'>
        <div className='nav-content'>
          <img className='mylogo' src="./assets/images/myLogo.png" alt="logo" />
          <ul>
            <li>
              <a className='menu-item' href='#about-container'>About</a>
            </li>
            <li>
              <a className='menu-item' href='#Services-container'>Services</a>
            </li>
            <li>
              <a className='menu-item' href='#work-container' >Work</a>
            </li>
            <li>
              <a className='menu-item' href='#contact-container' >Contact</a>
            </li>
          </ul>
          
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

export default NavBar;