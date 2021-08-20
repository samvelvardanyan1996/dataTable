import React from 'react';

const Search = ({changeInput, searchWord}) => {
  return (
    <div className="searchContainer">
      <label htmlFor="search">Search</label>
      <input id="search" className="search" type="text" onChange={changeInput} value={searchWord} />
    </div>
  );
}

export default Search;