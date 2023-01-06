import React from "react";

function SearchBar({sorting, onSort, filter, onFilter}) {

  function handleSortClick(event){
    onSort(event.target.value)
  }

  function handleFilterChange(event){
    onFilter(event.target.value);
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={sorting === "Alphabetically"}
          onChange={handleSortClick}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={sorting === "Price"}
          onChange={handleSortClick}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterChange} value={filter} >
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
