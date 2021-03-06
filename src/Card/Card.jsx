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
            {props.link && (
              <a
                href={`${props.link ? props.link : ''}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="category__web"
                  src="/images/webWithClick.svg"
                  alt="web"
                />
              </a>
            )}
            <button
              onClick={() => {
                const map = document.querySelector('#map');
                window.scrollTo(0, map.offsetTop);
                props.setSelectedPoint(props.item);
              }}
            >
              <img className="category__map" src="/images/map.svg" alt="map" />
            </button>
            {props.map && (
              <a
                href={`${props.map ? props.map : ''}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="category__googlemap"
                  src="/images/googlemap.svg"
                  alt="google"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
