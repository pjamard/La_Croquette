import React from 'react';
import '../CSS/Homepage.css';
import CatHero from '../img/cat-hero.jpg';

function Homepage() {
  return (
    <div className='Homepage'>
      <img className='cat-hero' src={CatHero} alt='cat-hero' />
      <h1 className='Header'>
        Votre comparateur de croquettes simple et rapide{' '}
      </h1>
      <p className='text-header'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
        accusantium cupiditate nam sed repellendus magnam dicta dolorem corrupti
        eos dignissimos, perspiciatis quibusdam omnis similique consequuntur
        quaerat totam eveniet voluptatibus vitae?
      </p>
    </div>
  );
}

export default Homepage;
