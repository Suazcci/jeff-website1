import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import bgVid from './Assets/Vid-2.mp4';
import CardItem from './CardItem';
import { SiDiscord } from 'react-icons/si';
import { FiInstagram } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import { BsSpotify } from 'react-icons/bs';
import { GiCardRandom } from 'react-icons/gi';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const photo1 = new URL("./Assets/img-1.jpg", import.meta.url)
  const photo2 = new URL("./Assets/img-2.png", import.meta.url)
  const photo3 = new URL("./Assets/img-3.png", import.meta.url)
  const photo4 = new URL("./Assets/img-4.png", import.meta.url)


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
                  Randify
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <NavLink to='/artists' className={({ isActive }) => 'nav-links' + (isActive ? " activated" : "")}>
                      Artists
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink to='/genre' className={({ isActive }) => 'nav-links' + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                      Genres
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink to='/songs' className={({ isActive }) => 'nav-links' + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                      Songs
                    </NavLink>
                  </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Create Account</
                Button>}
            </div>
        </nav>
        <nav>
          <div className='hero-container'>
            <video autoPlay loop muted>
              <source src={bgVid} type="video/mp4" />
            </video>
            <li className='nav-play'>
                <Link to='/spotify' 
                className='nav-play-link' onClick={closeMobileMenu}>
                  <BsFillPlayCircleFill />
                </Link>
            </li>
          </div>
        </nav>
      <div className='cards'>
        <h1>Check out what's trending!</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src={photo2}
                text='Songs everyone is listening to this month'
                label='Songs'
                path='/songs'
              />
            </ul>
          </div>
        </div>

      </div>
      <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Subscribe to get new song recomendations everyday based on your taste
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/spotify-api'>Spotify API</Link>
            <Link to='/'>Careers</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Support</Link>
            <Link to='/'>Bug Fixes</Link>
            <Link to='/'>Recomendations</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/discord'>Discord</Link>
            <Link to='/insta'>Instagram</Link>
            <Link to='/github'>Github</Link>
            <Link to='/spotify'>Spotify</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Randify
            </Link>
          </div>
          <small class='website-rights'>Spotify © 2022</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link-discord discord'
              to='/discord'
              target='_blank'
              aria-label='Discord'
            >
              <SiDiscord />
            </Link>
            <Link
              class='social-icon-link-instagram instagram'
              to='/insta'
              target='_blank'
              aria-label='Instagram'
            >
              <FiInstagram />
            </Link>
            <Link
              class='social-icon-link-github github'
              target='_blank'
              to='/github'
              aria-label='Github'
            >
              <AiFillGithub />
            </Link>
            <Link
              class='social-icon-link-spotify spotify'
              to='/spotify'
              target='_blank'
              aria-label='Spotify'
            >
              <BsSpotify />
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default Navbar;