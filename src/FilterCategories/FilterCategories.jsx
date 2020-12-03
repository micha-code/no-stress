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

  const categories = [
    {
      key: 'accomodation',
      name: 'Accomodation',
    },
    {
      key: 'restaurant',
      name: 'Food and Drinks',
    },
    {
      key: 'meTime',
      name: 'Me Time',
    },
    {
      key: 'mustDo',
      name: 'Must Do',
    },
  ];

  const showCategory = categories.find((item) => item.key === category);

  return (
    <form
      onSubmit={handleSubmit}
      className="category-data"
      onMouseLeave={() => setRollOut(false)}
    >
      <div className="info-category" onClick={(e) => setRollOut(!rollOut)}>
        {category && showCategory ? (
          <>
            {showCategory.name}
            <img
              className="delete-img"
              src="/images/cross.svg"
              alt="cross button"
              onClick={(e) => {
                setCategory(null);
                setRollOut(false);
                e.stopPropagation();
              }}
            />
          </>
        ) : (
          'Select Category'
        )}
      </div>
      {rollOut && (
        <div className="category-list">
          {categories.map((item) => (
            <div
              className="category-choice"
              onClick={() => handleSelected(item.key)}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </form>
  );
};

export default FilterCategories;

/*

      {rollOut && (
        <div className="category-list">
          {categories.map((item) => (
            <div
              className="category-choice"
              onClick={() => handleSelected(item.key)}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}

const handleSelected = (category) => {
    setRollOut(false);
    setCategory(category);
  };


*/
