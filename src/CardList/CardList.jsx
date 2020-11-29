import React from 'react';
import './style.css';
import { data } from '../Data/data.js';
import Card from '../Card/Card';

const CardList = () => {
  return (
    <>
      <div className="container">
        {data.map((props) => (
          <Card
            name={props.name}
            text={props.text}
            category={props.category}
            link={props.link}
            map={props.map}
          />
        ))}
      </div>
    </>
  );
};

export default CardList;
