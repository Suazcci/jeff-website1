import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
import { BsFillPlayCircleFill } from 'react-icons/bs';

const logoImage = new URL("./Assets/img-1.jpg", import.meta.url)


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
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
        <nav className="navbar">
            <div className="navbar-container">
                <Link to='/' className='navbar-logo' onClick=
                {closeMobileMenu}>
                  Randify<BsFillPlayCircleFill />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='/artist' className='nav-links' onClick={closeMobileMenu}>
                      Artist
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/genre' className='nav-links' onClick={closeMobileMenu}>
                      Genre
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/songs' className='nav-links' onClick={closeMobileMenu}>
                      Songs
                    </Link>
                  </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Sign Up</
                Button>}
            </div>
        </nav>
        <div>
          <img src={logoImage} />
        </div>
    </>
  );
}

export default Navbar;