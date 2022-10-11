import React, { useState } from 'react';
import datas from '../datas/datas.js';
import Card from '../components/Card.jsx';
import '../CSS/LesCroquettes.css';
import Filter from '../components/Filter.jsx';

function LesCroquettes() {
  return (
    <div className='card-container'>
      {datas.map((data) => (
        <Card
          key={data.id}
          picture={data.picture}
          brand={data.brand}
          name={data.name}
          age={data.age}
          flavour={data.flavour}
          cereal={data.cereal}
          sterelised={data.sterelised}
          weight={data.weight}
          urinaryCare={data.urinaryCare}
        />
      ))}
    </div>
  );
}

export default LesCroquettes;
