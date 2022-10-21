import React from 'react';
import Card from '../components/Card.jsx';

function CardList(props) {
  const { datas } = props;
  return (
    <div>
      {datas.map((data) => (
        <Card key={data.id} {...data} />
      ))}
    </div>
  );
}

export default CardList;
