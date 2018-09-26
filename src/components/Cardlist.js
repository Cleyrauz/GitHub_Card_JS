import React from 'react';
import Card from './Card.js';

const Cardlist = (props) => {
  const cl = props.cards.map(card => {
    return <li key={card.id}>
      <Card {...card}/>
    </li>
  });

  return (
    <div className="cardlist-container">
    <ol className="card-list">{cl}
    </ol>
    </div>
  );
};

export default Cardlist;
