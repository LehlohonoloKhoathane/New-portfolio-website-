import React from 'react';
import './NavBar.css'

const NavBar = () => {
  return (
    <>
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
          
          {/* <button class='menu-button' onClick={()=>{}}>
        
          </button> */}
        </div>
      </nav>
    </>
  );
};

export default NavBar;