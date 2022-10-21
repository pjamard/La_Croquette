import React from 'react';
import Card from '../components/Card.jsx';

function CardList(props) {
  const { updateDatas } = props;
  return (
    <div>
      {updateDatas.map((data) => (
        <Card key={data.id} {...data} />
      ))}
    </div>
  );
}

export default CardList;
