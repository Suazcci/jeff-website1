import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';
import { BsFillPlayCircleFill } from 'react-icons/bs'

const logoImage = new URL("./Assets/img-1.jpg", import.meta.url)

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src={logoImage} />
      <h1>
      Play! <BsFillPlayCircleFill />
      </h1>
      <div className='hero-btns'>
        <Button 
        className='btns' 
        buttonStyle='btn--outline' 
        buttonSize='btn--large'
        >
          Discover new music
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
