import React, { useState, useEffect } from 'react';
import './FilterCountries.css';
import { countries } from '../Data/countries.js';

const FilterCountries = ({ country, setCountry }) => {
  const [editMode, setEditMode] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState(null);
  const [userFilter, setUserFilter] = useState('');

  useEffect(() => {
    console.log(userFilter);
    const userFilteredCountries = countries
      .filter((item) => {
        return item.name.toUpperCase().includes(userFilter.toUpperCase());
      })
      .slice(0, 10)
      .map((item) => (
        <div
          key={item.name}
          value={item.country}
          onClick={() => {
            setEditMode(false);
            setCountry(item.country);
          }}
        >
          {item.name}
          <div className={`flag flag-${item.country.toLowerCase()}`}> </div>
        </div>
      ));

    setFilteredCountries(userFilteredCountries);
  }, [userFilter]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="country-info">
        {/* 1. nejdřív jde vidět div s jednou zemí, div options, input text uživ. filtr jsou schované
2. kliknu do divu s jednou zemí, schová se div s jednou zemí, objeví se input text
3. uživatel píše do input textu, na změnu textu (on change) se mění seznam států (div options)
4. uživatel klikne na stát, ten se objeví v divu země, schová se zbytek */}
        <form onSubmit={handleSubmit} className="country-data">
          <div>
            {!editMode && (
              <div
                className="country-selected"
                onClick={() => setEditMode(true)}
              >
                vybrano je: {country}
              </div>
            )}

            {editMode && (
              <input
                type="text"
                placeholder="Enter country"
                onChange={(e) => {
                  // console.log(e.target.value);
                  setUserFilter(e.target.value);
                }}
              />
            )}
          </div>
          {editMode && <div className="country-list">{filteredCountries}</div>}
        </form>
      </div>
    </div>
  );
};

export default FilterCountries;
