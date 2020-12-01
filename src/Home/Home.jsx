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
      <div className="icon-bar">
        <a
          href="https://www.facebook.com/nostresstravelguide"
          target="_blank"
          rel="noreferrer"
          className="facebook"
        >
          <img
            src="images/fb.svg"
            width="30"
            height="30"
            className="icon"
            alt="Facebook"
          />
        </a>
        <a
          href="https://www.instagram.com/nostresstravelguide/"
          target="_blank"
          rel="noreferrer"
          className="instagram"
        >
          <img
            src="images/instagram.svg"
            width="30"
            height="30"
            className="icon"
            alt="Instagram"
          />
        </a>
        <a
          href="nostresstravelguide@gmail.com "
          target="_blank"
          rel="noreferrer"
          className="email"
        >
          <img
            src="images/email.svg"
            width="30"
            height="30"
            className="icon"
            alt="email"
          />
        </a>
      </div>

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
          setSelectedPoint={setSelectedPoint}
        />
      )}

      {selectedPoint ? (
        <div className="extra-displayed-card">
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
