// components/Hostel/SearchFilters.js

import React from 'react';

function SearchFilters({ onFilterChange }) {
  const handleInputChange = (e) => {
    onFilterChange({ [e.target.name]: e.target.value });
  };

  return (
    <div className="search-filters">
      <h2>Search Filters</h2>
      <label>Location:</label>
      <input type="text" name="location" onChange={handleInputChange} />
      <label>Price Range:</label>
      <select name="priceRange" onChange={handleInputChange}>
        <option value="0-50">$0 - $50</option>
        <option value="51-100">$51 - $100</option>
        {/* Add more price ranges as needed */}
      </select>
      {/* Add more filters as needed */}
    </div>
  );
}

export default SearchFilters;
