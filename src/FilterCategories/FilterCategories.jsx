import React from 'react';
import './FilterCategories.css';

const FilterCategories = (category) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
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
  );
};

export default FilterCategories;
