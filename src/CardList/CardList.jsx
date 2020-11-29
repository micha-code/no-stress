import React, { useEffect, useState } from 'react';
import './style.css';
import Card from '../Card/Card';
import database from '../Database/Database.js';

const CardList = ({ country, category }) => {
  const [cards, setCards] = useState(null);
  useEffect(() => {
    database
      .collection('Places')
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
              name={item.name}
              text={item.text}
              category={item.category}
              link={item.link}
              map={item.map}
            />
          ));
        setCards(cardList);
      });
  }, [country, category]);

  return (
    <>
      <div className="containerCards">{cards}</div>
    </>
  );
};

export default CardList;

// db.collection("users").get().then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//       console.log(`${doc.id} => ${doc.data()}`);
//   });
// });
