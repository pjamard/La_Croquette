import React from 'react';
import Checkbox from './Checkbox';
import datas from '../datas/datas.js';
import '../CSS/Filter.css';

function Filter(props) {
  const { categories, handleFilterChange } = props;

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
    </div>
  );
}

export default Filter;
