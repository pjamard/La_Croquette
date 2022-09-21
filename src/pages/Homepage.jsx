import React from 'react';
import '../CSS/Homepage.css';
import CatHero from '../images/cat-hero.jpg';
import Chat from '../images/chat.png';
import Footer from '../components/Footer';

function Homepage() {
  return (
    <div className='homepage'>
      <div className='contenant-cat-hero-image'>
        <img className='cat-hero' src={CatHero} alt='cat-hero' />
        <div className='texte-on-cat-image'>LA CROQUETTE</div>
      </div>
      <div>
        <h1 className='header'>
          Votre comparateur de croquettes simple et rapide{' '}
        </h1>
        <p className='text-header'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
          accusantium cupiditate nam sed repellendus magnam dicta dolorem
          corrupti eos dignissimos, perspiciatis quibusdam omnis similique
          consequuntur quaerat totam eveniet voluptatibus vitae?
          <br /> <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
          accusantium cupiditate nam sed repellendus magnam dicta dolorem
          corrupti eos dignissimos, perspiciatis quibusdam omnis similique
          consequuntur quaerat totam eveniet voluptatibus vitae?
        </p>
      </div>
      <div>
        <img className='cat-icon' src={Chat} alt='cat' />
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
