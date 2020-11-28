import React from 'react';
import './FilterCategories.css';

const FilterCategories = (category) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
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
  );
};

export default FilterCategories;
