import React from 'react';
import '../CSS/Navbar.css';
import logo from '../images/logos/logo.png';
import brand from '../images/logos/la-croquette.png';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='brand-logo'>
        <img src={logo} alt='logo' />
        <img src={brand} alt='logo' />
      </div>
      <div className='navbar-links'>
        <ul>
          <li>Accueil</li>
          <li>Les croquettes</li>
          <ul>
            <li>Juniors</li>
            <li>Adultes</li>
            <li>Seniors</li>
            <li>Chats stérilisés</li>
          </ul>
          <li>Comparateur</li>
          <li>Mon compte</li>
          <ul>
            <li>Mes informations</li>
            <li>Mes favoris</li>
            <li>Me déconnecter</li>
          </ul>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
