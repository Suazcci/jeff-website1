import React from 'react'
import { Button } from './Button';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                hello
            </p>
            <p className='footer-subscription-text'>
                hello2
            </p>
            <div className='input-areas'>
                <form>
                    <input 
                        type='email' 
                        name='email' 
                        placeholder='Your Email'
                        className='footer-input'
                    />
                    <Button buttonStyle='btn--outline'>Contact us</Button>
                </form>
            </div>
        </section>
    </div>
  )
}

export default Footer