import React from 'react';
import Checkbox from './Checkbox';
import '../CSS/Filter.css';

function Filter(props) {
  const { categories, flavours, handleFilterChange } = props;

  return (
    <div className='Filter'>
      {' '}
      <h1>Filtrer</h1>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Checkbox value={category} handleChange={handleFilterChange} />
          </li>
        ))}
      </ul>
      <ul>
        {flavours.map((flavour) => (
          <li key={flavour}>
            <Checkbox value={flavour} handleChange={handleFilterChange} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;
