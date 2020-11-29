import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import { data } from '../Data/data.js';
import Card from '../Card/Card';

const CardList = ({ country, category }) => {
  return (
    <>
      <div className="container">
        {data
          .filter((item) => item.country === country)
          .filter((item) => {
            if (!category) {
              return true;
            }
            return item.category === category;
          })
          .map((item) => (
            <Card
              name={item.name}
              text={item.text}
              category={item.category}
              link={item.link}
              map={item.map}
            />
          ))}
      </div>
    </>
  );
};

export default CardList;
