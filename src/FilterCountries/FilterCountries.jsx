import React, { useState, useEffect } from 'react';
import './FilterCountries.css';
import './flags.css';
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
          className="country-choice"
          key={item.name}
          value={item.country}
          onClick={() => {
            setEditMode(false);
            setCountry(item.country);
          }}
        >
          {item.name}
          <div className="flag-wrap">
            <div className={`flag flag-${item.country.toLowerCase()}`}> </div>
          </div>
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
        <form onSubmit={handleSubmit} className="country-data">
          <div className="country-holder">
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
                className="input-countries"
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
