import React from 'react';

const Search = ({priceMin, priceMax, changeInput, searchWord}) => {
  return (
    <div className="searchContainer">
      <label htmlFor="priceMin">Price min</label>
      <input id="priceMin" className="price" type="number" onChange={changeInput} defaultValue={priceMin} />
      <label htmlFor="priceMax">Price max</label>
      <input id="priceMax" className="price" type="number" onChange={changeInput} defaultValue={priceMax} />
    </div>
  );
}

export default Search;