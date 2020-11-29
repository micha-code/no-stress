import React, { useState, useRef, useEffect } from 'react';
import './Home.css';
import Globe from '../Globe/Globe.jsx';
import FilterCountries from '../FilterCountries/FilterCountries.jsx';
import FilterCategories from '../FilterCategories/FilterCategories.jsx';
import CardList from '../CardList/CardList.jsx';

function Home() {
  const [country, setCountry] = useState('CZ');
  const [category, setCategory] = useState('mustdo');

  return (
    <>
      <header className="main">
        <h1 className="mainTitle">No stress Travels!</h1>
        <h2 className="secondTitle">Living life as an adventure</h2>
        <img className="mountainImg" src="images/mountainCropped.jpg" />
        <h3 className="thirdTitle">Where is the next adventure taking you?</h3>
      </header>

      <div className="filters">
        <FilterCountries setCountry={setCountry} country={country} />
        <FilterCategories setCategory={setCategory} category={category} />
      </div>
      <Globe country={country} />
      <CardList />
    </>
  );
}
export default Home;
