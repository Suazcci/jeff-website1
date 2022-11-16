import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

const photo1 = new URL("./Assets/img-1.jpg", import.meta.url)
const photo2 = new URL("./Assets/img-2.png", import.meta.url)

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out whats trending!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={photo1}
              text='Explore the hidden waterfall deep hello the Amazon Jungle'
              label='Artist'
              path='/artists'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;