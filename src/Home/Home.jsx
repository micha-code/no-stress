import React, { useState } from 'react';
import './Home.css';
import Globe from '../Globe/Globe.jsx';
import FilterCountries from '../FilterCountries/FilterCountries.jsx';
import FilterCategories from '../FilterCategories/FilterCategories.jsx';
import CardList from '../CardList/CardList.jsx';
import Card from '../Card/Card.jsx';

function Home() {
  const [country, setCountry] = useState('CZ');
  const [category, setCategory] = useState(null);
  const [coverGlobe, setCoverGlobe] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState(null);

  return (
    <>
      <header className="main">
        <h1 className="mainTitle">No stress Travels!</h1>
        <h2 className="secondTitle">Living life as an adventure</h2>
        <img
          className="mountainImg"
          src="images/mountainCropped.jpg"
          alt="mainMountainPicture"
        />
        <h3 className="thirdTitle">
          Where is the next adventure taking you?{' '}
          <button
            onClick={() => setCoverGlobe((value) => !value)}
            className="map-btn"
          >
            <img
              className="map-globe-img"
              src="/images/MapBlack.svg"
              alt="map-icon"
            />
          </button>
        </h3>
      </header>
      <div className="filters">
        <div className="container">
          <FilterCountries setCountry={setCountry} country={country} />
        </div>
        <div className="container">
          <FilterCategories setCategory={setCategory} category={category} />
        </div>
      </div>
      {coverGlobe ? null : (
        <Globe
          country={country}
          category={category}
          selectedPoint={selectedPoint}
        />
      )}

      {selectedPoint ? (
        <div>
          <Card {...selectedPoint} />
        </div>
      ) : null}
      <CardList
        country={country}
        category={category}
        setSelectedPoint={setSelectedPoint}
      />
    </>
  );
}
export default Home;

/*
const handleCoverGlobe = () => {
    if (!setCoverGlobe) {
      return setCoverGlobe(true);
    }
    return setCoverGlobe(false);
  };
*/
