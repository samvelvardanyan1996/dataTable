import React from 'react';

const Show = ({ handleChangeLimit, limit }) => {
  return (
    <div className="showContainer">
      <span>Show </span>
      <select className="show" onChange={handleChangeLimit} value={limit}>
        <option>5</option>
        <option>10</option>
        <option>15</option>
        <option>20</option>
      </select>
      <span> entries</span>
    </div>
  );
}

export default Show;