import React from 'react';
import '../CSS/LesCroquettes.css';

function Card(props) {
  const {
    picture,
    brand,
    age,
    flavour,
    name,
    cereal,
    sterelised,
    weight,
    urinaryCare,
  } = props;
  return (
    <div className='card' data-label={age}>
      <img src={picture} alt='chat' />
      <h4 className='card-header'>{brand}</h4>
      <h5>{name}</h5>
      <div className='card-body'>
        <ul>
          <li>{age}</li>
          <li>{flavour}</li>
          <li>{cereal ? <p>Sans céréales</p> : null}</li>
          <li>{sterelised ? <p>Convient aux chats stérilisés</p> : null}</li>
          <li>{weight ? <p>Contrôle du poids</p> : null}</li>
          <li>{urinaryCare ? <p>Santé urinaire</p> : null}</li>
        </ul>
      </div>
      <button className='btn-info-card'>Plus d'informations</button>
    </div>
  );
}

export default Card;
