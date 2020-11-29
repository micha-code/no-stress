import React from 'react';
import './style.css';

const Card = (props) => {
  return (
    <>
      <div className="card">
        <div className={`card__${props.category}`}>
          <div className="card__body">
            <p className="card__name">{props.name}</p>
            <img
              className="category__pin"
              src={`images/icon-${props.category}.svg`}
              alt="pin"
            />
          </div>
          <div>
            <p className="card__text">{props.text}</p>
          </div>
          <div className="card__icons">
            <a href={`${props.link}`}>
              <img
                className="category__web"
                src="/images/webWithClick.svg"
                alt="web"
              />
            </a>
            <a href={`${props.map}`}>
              <img className="category__map" src="/images/map.svg" alt="map" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
