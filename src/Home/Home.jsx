import React, { useState, useRef, useEffect } from 'react';
import './Home.css';
import Globe from '../Globe/Globe.jsx';
import FilterCountries from '../FilterCountries/FilterCountries.jsx';
import FilterCategories from '../FilterCategories/FilterCategories.jsx';

function Home() {
  return (
    <>
      <div className="filters">
        <FilterCountries />
        <FilterCategories />
      </div>
      <Globe />
    </>
  );
}
export default Home;
