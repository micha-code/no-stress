import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import { data } from './data.js';
import { Card } from './Card/Card.jsx';


const CardList = () => {
  return (
    <>
      <div className="container">
        {data.map((card) => (
          <Card
            name={card.name}
            text={card.text}
            category={card.category}
            link={card.link}
            map={card.map}
          />
        ))}
      </div>
    </>
  );
};

render(<CardList />, document.querySelector('#app'));