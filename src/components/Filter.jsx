import React, { useState } from 'react';
import Checkbox from './Checkbox';
import '../CSS/Filter.css';

function Filter() {
  
  return (
    <div className='Filter'>
      {' '}
      <h1>Filtrer</h1>
      <div>
      <Checkbox content="Adulte"/>
      <Checkbox content="Sénior"/>
      <Checkbox content="Chaton"/>
      </div>
      <div>
      <Checkbox content="Chat stérilisé"/>
      <Checkbox content="Sans céréale"/>
      <Checkbox content="Contrôle du poids"/>
      <Checkbox content="Santé urinaire"/>
      </div>
    

    </div>
  );
}

export default Filter;
