import React, { useState } from 'react';
import Checkbox from './Checkbox';
import '../CSS/Filter.css';

function Filter() {
  const [active, setActive] = useState(false);

  function handleChange() {
    setActive(!active);
  }

  return (
    <div className='Filter'>
      {' '}
      <h1>Filtrer</h1>
      <div>
        <Checkbox
          active={active}
          handleChange={handleChange}
          content='Adulte'
        />
        <Checkbox
          active={active}
          handleChange={handleChange}
          content='Sénior'
        />
        <Checkbox
          active={active}
          handleChange={handleChange}
          content='Chaton'
        />
      </div>
      <div>
        <Checkbox
          active={active}
          handleChange={handleChange}
          content='Chat stérilisé'
        />
        <Checkbox
          active={active}
          handleChange={handleChange}
          content='Sans céréale'
        />
        <Checkbox
          active={active}
          handleChange={handleChange}
          content='Contrôle du poids'
        />
        <Checkbox
          active={active}
          handleChange={handleChange}
          content='Santé urinaire'
        />
      </div>
    </div>
  );
}

export default Filter;
