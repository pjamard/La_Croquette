import React from 'react';
import datas from '../datas/datas.js';
import Card from '../components/Card.jsx';

function LesCroquettes() {
  return <div>{datas.map((data) => 
    <Card key={data.id}
    picture={data.picture}
    brand={data.brand}
    flavour={data.flavour}
    />
    
    
    )}</div>;
}

export default LesCroquettes;
