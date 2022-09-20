import React from 'react';
import '../CSS/LesCroquettes.css';
import Checkbox from './Checkbox';

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
          <li>
            Sans céréale :{' '}
            {cereal ? <span>&#9989;</span> : <span>&#10060;</span>}
          </li>
          <li>
            Convient aux chats stérilisés :{' '}
            {sterelised ? <span>&#9989;</span> : <span>&#10060;</span>}
          </li>
          <li>
            Contrôle du poids :{' '}
            {weight ? <span>&#9989;</span> : <span>&#10060;</span>}
          </li>
          <li>
            Santé urinaire :{' '}
            {urinaryCare ? <span>&#9989;</span> : <span>&#10060;</span>}
          </li>
        </ul>
      </div>
      <div>
        <button className='btn-info-card'>Plus d'informations</button>
      </div>
      <div>
        <Checkbox content="Comparer"/>
      </div>
    </div>
  );
}

export default Card;
