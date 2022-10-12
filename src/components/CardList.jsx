import React from 'react';
import Card from '../components/Card.jsx';

function CardList(props) {
  const { products } = props;
  return (
    <div>
      {products.map((data) => (
        <Card key={data.id} {...data} />
      ))}
    </div>
  );
}

export default CardList;
