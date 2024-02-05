import React from 'react';
import './NavBar.css'

const NavBar = () => {
  return (
    <>
      <nav className='nav-wrapper'>
        <div className='nav-content'>
          <img className='mylogo' src="" alt="logo" />
          <ul>
            <li>
              <a className='menu-item' href=''>About</a>
            </li>
            <li>
              <a className='menu-item' href=''>Services</a>
            </li>
            <li>
              <a className='menu-item' href=''>Work</a>
            </li>
            <li>
              <a className='menu-item' href=''>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar;