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
              <a className='menu-item'>About</a>
            </li>
            <li>
              <a className='menu-item' >Services</a>
            </li>
            <li>
              <a className='menu-item' >Work</a>
            </li>
            <li>
              <a className='menu-item' >Contact</a>
            </li>
          </ul>
          
          <button class='menu-button' onClick={() => {}}>
            <span 
              class={'material-symbols-outlined'} 
                style={{fontStyle: '1.8rem'}}
                >
                  Menu
                </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;