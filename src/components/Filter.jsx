import React from 'react';
import Checkbox from './Checkbox';
import '../CSS/Filter.css';

function Filter(props) {
  const {
    adult,
    senior,
    kitten,
    steril,
    cereal,
    weight,
    health,
    handleAdult,
    handleSenior,
    handleKitten,
    handleSteril,
    handleCereal,
    handleWeight,
    handleHealth,
  } = props;

  return (
    <div className='Filter'>
      {' '}
      <h1>Filtrer</h1>
      <div>
        <Checkbox active={adult} handleChange={handleAdult} content='Adulte' />
        <Checkbox
          active={senior}
          handleChange={handleSenior}
          content='Sénior'
        />
        <Checkbox
          active={kitten}
          handleChange={handleKitten}
          content='Chaton'
        />
      </div>
      <div>
        <Checkbox
          active={steril}
          handleChange={handleSteril}
          content='Chat stérilisé'
        />
        <Checkbox
          active={cereal}
          handleChange={handleCereal}
          content='Sans céréale'
        />
        <Checkbox
          active={weight}
          handleChange={handleWeight}
          content='Contrôle du poids'
        />
        <Checkbox
          active={health}
          handleChange={handleHealth}
          content='Santé urinaire'
        />
      </div>
    </div>
  );
}

export default Filter;
