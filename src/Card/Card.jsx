import React, { useState } from 'react';
import './style.css';

const card = (props) => {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card__category">
            <p className="card__name">Testing restaurant</p>
            <img
              className="category__pin"
              src="images/pin-restaurant.svg"
              alt="pin"
            />
          </div>
          <div>
            <p className="card__text">
              The secret service isn't allowed to yell "Get down!" anymore when
              the president is about to be attacked. Now they have to yell
              "Donald, duck!"
            </p>
          </div>
          <div className="card__icons">
            <a href="green.html">
              <img
                className="category__web"
                src="images/webWithClick.svg"
                alt="web"
              />
            </a>
            <a href="green.html">
              <img className="category__map" src="images/map.svg" alt="map" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default card;
