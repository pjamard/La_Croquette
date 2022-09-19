import React, { useState } from 'react';
import '../CSS/Navbar.css';
import logo from '../images/logos/logo.png';
import brand from '../images/logos/la-croquette.png';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = (e) => {
    setIsLoggedIn(!isLoggedIn);
  };

  const [isLesCroquettesClicked, setIsLesCroquettesClicked] = useState(false);
  const lesCroquettesChange = (e) => {
    setIsLesCroquettesClicked(!isLesCroquettesClicked);
  };

  const [isMonCompteClicked, setIsMonCompteClicked] = useState(false);
  const monCompteChange = (e) => {
    setIsMonCompteClicked(!isMonCompteClicked);
  };

  return (
    <nav className='navbar'>
      <div className='brand-logo'>
        <img src={logo} alt='logo' />
        <img src={brand} alt='logo' />
      </div>
      <div className='navbar-links'>
        <ul>
          <li>Accueil</li>
          <li onClick={lesCroquettesChange}>Les croquettes</li>
          {isLesCroquettesClicked ? (
            <ul>
              <li>Juniors</li>
              <li>Adultes</li>
              <li>Seniors</li>
              <li>Tout voir</li>
            </ul>
          ) : null}
          <li>Comparateur</li>
          {isLoggedIn ? (
            <>
              <li onClick={monCompteChange}>Mon compte</li>
              {isMonCompteClicked ? (
                <ul>
                  <li>Mes informations</li>
                  <li>Mes favoris</li>
                  <li onClick={login}>Me déconnecter</li>
                </ul>
              ) : null}
            </>
          ) : (
            <li onClick={login}>Connexion</li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
