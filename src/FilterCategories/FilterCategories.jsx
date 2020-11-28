import React from 'react';

const FilterCategories = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <select>
          <option value="accomodation">Accomodation</option>
          <option value="restaurant">Food and Drinks </option>
          <option value="metime"> Me time </option>
          <option value="mustdo">Must do </option>
        </select>
      </div>
    </form>
  );
};

export default FilterCategories;
