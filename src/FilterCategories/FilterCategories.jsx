import React, { useState } from 'react';
import './FilterCategories.css';

const FilterCategories = ({ category, setCategory }) => {
  const [rollOut, setRollOut] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSelected = (category) => {
    setRollOut(false);
    setCategory(category);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="category-data">
        <div className="info-category" onClick={() => setRollOut(true)}>
          {category}
        </div>
        {rollOut && (
          <div className="category-list">
            <div
              className="category-choice"
              onClick={() => handleSelected('accomodation')}
            >
              Accomodation
            </div>
            <div
              className="category-choice"
              onClick={() => handleSelected('restaurant')}
            >
              Food and Drinks
            </div>
            <div
              className="category-choice"
              onClick={() => handleSelected('meTime')}
            >
              Me time
            </div>
            <div
              className="category-choice"
              onClick={() => handleSelected('mustDo')}
            >
              Must do
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default FilterCategories;

/*
<div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <select>
            <option className="info-category" value="accomodation">
              Accomodation
            </option>
            <option className="info-category" value="restaurant">
              Food and Drinks
            </option>
            <option className="info-category" value="metime">
              Me time
            </option>
            <option className="info-category" value="mustdo">
              Must do
            </option>
          </select>
        </div>
      </form>
    </div>

*/
