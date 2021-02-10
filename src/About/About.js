import React, { useState, useEffect } from 'react';

import './About.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <a to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src="#" alt="logo"></img>
          </a>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a to='#' className='nav-links' onClick={closeMobileMenu}>Movilaizer</a>
            </li>

            <li>
              <a to='#' className='nav-links-mobile' onClick={closeMobileMenu}>Sign Up</a>
            </li>
          </ul>
          {button && <a buttonStyle='button--outline' to="#">SIGN UP</a>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;