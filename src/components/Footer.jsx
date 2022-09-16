import React from 'react';
import catFoot from '../images/empreinte-de-patte.png';
import partners from '../images/poignee-de-main.png';

function Footer() {
  return (
    <footer style={{ background: 'grey', width: '100%', textAlign: 'center' }}>
      <h5>La Croquette - Votre site comparateur de croquettes</h5>
      <h5>
        Nous contacter{' '}
        <img
          style={{ backgroundSize: 'cover', width: '15px' }}
          src={catFoot}
          alt='empreinte-patte-chat'
        />
      </h5>
      <h5>
        Nos partenaires{' '}
        <img
          style={{ backgroundSize: 'cover', width: '15px' }}
          src={partners}
          alt='poignée-de-mains'
        />
      </h5>
    </footer>
  );
}

export default Footer;
