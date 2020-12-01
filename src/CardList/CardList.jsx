import React, { useEffect, useState } from 'react';
import './style.css';
import Card from '../Card/Card';
import database from '../Database/Database.js';

const CardList = ({ country, category, setSelectedPoint }) => {
  const [cards, setCards] = useState(null);
  useEffect(() => {
    database
      .collection('Places')
      .where('country', '==', country)
      .get()
      .then((querySnapshot) => {
        const places = [];
        querySnapshot.forEach((doc) => {
          places.push(doc.data());
        });
        const cardList = places
          .filter((item) => item.country === country)
          .filter((item) => {
            if (!category) {
              return true;
            }
            return item.category === category;
          })

          .map((item) => (
            <Card
              key={item.id}
              name={item.name}
              text={item.text}
              category={item.category}
              link={item.link}
              map={item.map}
              item={item}
              setSelectedPoint={setSelectedPoint}
            />
          ));
        setCards(cardList);
      });
  }, [country, category, setSelectedPoint]);

  return (
    <>
      <div className="containerCards">{cards}</div>
    </>
  );
};

export default CardList;
