import React from 'react';

const Table = ({handleSortType, handleSortName, sortName, data}) => {
  return (
    <table style={{border: 1}}>
      <thead>
        <tr>
          <th onClick={handleSortName}>
            <span className="green">
              {sortName === "price" ? "✔" : ""}
            </span>
            <span className="sortName">
              price
            </span>
            <select className="show" onChange={handleSortType}>
              <option>Asc</option>
              <option>Desc</option>
            </select>
          </th>
          <th onClick={handleSortName}>
            <span className="green">
              {sortName === "description" ? "✔" : ""}
            </span>
            <span className="sortName">
              description
            </span>
          </th>
          <th onClick={handleSortName}>
            <span className="green">
              {sortName === "title" ? "✔" : ""}
            </span>
            <span className="sortName">
              title
            </span>
          </th>
          <th onClick={handleSortName}>
            <span className="green">
              {sortName === "image" ? "✔" : ""}
            </span>
            <span className="sortName">
              image
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <tr key={item._id}>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>{item.title}</td>
              <td><img src={item.image} /></td>
            </tr>
          )
          })
        }
      </tbody>
    </table>
  );
}

export default Table;