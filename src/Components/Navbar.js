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

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const photo1 = new URL("./Assets/img-1.jpg", import.meta.url)
  const photo2 = new URL("./Assets/img-2.png", import.meta.url)
  const photo3 = new URL("./Assets/img-3.png", import.meta.url)
  const photo4 = new URL("./Assets/img-4.png", import.meta.url)
  const photo5 = new URL("./Assets/img-5.png", import.meta.url)
  const photo6 = new URL("./Assets/img-6.png", import.meta.url)
  const photo7 = new URL("./Assets/img-7.png", import.meta.url)
  const photo8 = new URL("./Assets/img-8.png", import.meta.url)
  const photo9 = new URL("./Assets/img-9.jpg", import.meta.url)


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
                <Link onClick={() => openInNewTab('/')} className='navbar-logo'>
                  Randify
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <NavLink 
                    onClick={() => openInNewTab('https://open.spotify.com/user/spotify?si=fdad3a2736f44cba')} 
                    className={({ isActive }) => 'nav-links' + (isActive ? " activated" : "")}>
                      Artists
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink 
                    onClick={() => openInNewTab('https://open.spotify.com/genre/topic-grid')} 
                    className={({ isActive }) => 'nav-links' + (isActive ? " activated" : "")}>
                      Genres
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink 
                    onClick={() => openInNewTab('https://open.spotify.com/playlist/37i9dQZF1DX4zbZrYRGVam')} 
                    className={({ isActive }) => 'nav-links' + (isActive ? " activated" : "")}>
                      Songs
                    </NavLink>
                  </li>
                </ul>
                {button && <Button onClick={() => openInNewTab('https://www.spotify.com/us/signup?forward_url=https%3A%2F%2Fopen.spotify.com%2F')} buttonStyle='btn--outline'>Create Account</
                Button>}
            </div>
        </nav>
        <nav>
          <div className='hero-container'>
            <video autoPlay loop muted>
              <source src={bgVid} type="video/mp4" />
            </video>
            <li className='nav-play'>
                <Link className='nav-play-link' onClick={() => openInNewTab('https://open.spotify.com/user/spotify?si=fdad3a2736f44cba')} >
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
                src={photo5}
                text='Songs everyone is listening to this month'
                label='Songs'
                path='/songs'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem 
                src={photo2}
                text='Songs everyone is listening to this month'
                label='Songs'
                path='/songs'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem 
                src={photo6}
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
            <Button buttonStyle='btn--outline' onClick={() => openInNewTab('/')}>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link onClick={() => openInNewTab('https://developer.spotify.com/documentation/web-api/')}>Spotify API</Link>
            <Link onClick={() => openInNewTab('https://www.lifeatspotify.com')}>Careers</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link onClick={() => openInNewTab('https://support.spotify.com/us/')}>Support</Link>
            <Link onClick={() => openInNewTab('https://royaltyfreetube.com/category/loop/')}>Wallpapers</Link>
            <Link onClick={() => openInNewTab('https://open.spotify.com/artist/3MZsBdqDrRTJihTHQrO6Dq')}>Personal Favorites</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link onClick={() => openInNewTab('https://discord.com')}>Discord</Link>
            <Link onClick={() => openInNewTab('https://www.instagram.com')}>Instagram</Link>
            <Link onClick={() => openInNewTab('https://github.com')}>Github</Link>
            <Link onClick={() => openInNewTab('https://open.spotify.com')}>Spotify</Link>
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
              onClick={() => openInNewTab('https://discord.com')}
              aria-label='Discord'
            >
              <SiDiscord />
            </Link>
            <Link
              class='social-icon-link-instagram instagram'
              onClick={() => openInNewTab('https://www.instagram.com')}
              aria-label='Instagram'
            >
              <FiInstagram />
            </Link>
            <Link
              class='social-icon-link-github github'
              onClick={() => openInNewTab('https://github.com')}
              aria-label='Github'
            >
              <AiFillGithub />
            </Link>
            <Link
              class='social-icon-link-spotify spotify'
              onClick={() => openInNewTab('https://open.spotify.com')}
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