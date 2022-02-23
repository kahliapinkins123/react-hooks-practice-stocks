import React from "react";

function SearchBar({ stocks, setStocks, setFilterBy }) {
  
  
  function alphabetHandler(){
    const newStocks = stocks.sort(function(a,b){return a.name.localeCompare(b.name)})
    setStocks([...newStocks])

  }

  function priceHandler(){
    const newStocks = stocks.sort(function(a,b){return a.price - b.price})
    setStocks([...newStocks])  
  }

  function filterHandler(e){
    setFilterBy(e.target.value)
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={null}
          onChange={alphabetHandler}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={null}
          onChange={priceHandler}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={filterHandler}>
          <option value='All'>All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
