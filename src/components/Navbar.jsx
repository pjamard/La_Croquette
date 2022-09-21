import React, { useState } from 'react';
import '../CSS/Navbar.css';
import logoBrand from '../images/logos/la-croquette-logo.png';

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
      <img className='logo' src={logoBrand} alt='Logo' />
      <ul className='navbar-items'>
        <li className='items'>Accueil</li>
        <li className='items' onClick={lesCroquettesChange}>
          Les croquettes{' '}
          {isLesCroquettesClicked ? (
            <span>&#10134;</span>
          ) : (
            <span>&#10133;</span>
          )}
          {isLesCroquettesClicked ? (
            <ul className='subMenu'>
              <li className='subMenu-items'>Juniors</li>
              <li className='subMenu-items'>Adultes</li>
              <li className='subMenu-items'>Seniors</li>
              <li className='subMenu-items'>Tout voir</li>
            </ul>
          ) : null}
        </li>
        {isLoggedIn ? (
          <>
            <li className='items' onClick={monCompteChange}>
              Mon compte{' '}
              {isMonCompteClicked ? (
                <span>&#10134;</span>
              ) : (
                <span>&#10133;</span>
              )}
              {isMonCompteClicked ? (
                <ul className='subMenu'>
                  <li className='subMenu-items'>Mes informations</li>
                  <li className='subMenu-items'>Mes favoris</li>
                  <li className='subMenu-items' onClick={login}>
                    Me déconnecter
                  </li>
                </ul>
              ) : null}
            </li>
          </>
        ) : (
          <li className='items' onClick={login}>
            Connexion
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
