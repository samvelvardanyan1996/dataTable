import React, { Fragment, useEffect, useState, } from 'react';
import Search from "./components/Search";
import Price from "./components/Price";
import Table from "./components/Table";
import Show from "./components/Show";

const App = () => {
  const [limit, setLimit] = useState(20);
  const [priceMin, setPriceMin] = useState(1);
  const [priceMax, setPriceMax] = useState(1000);
  const [sortName, setSortName] = useState("price");
  const [searchWord, setSearchWord] = useState("");
  const [sortType, setSortType] = useState("asc");
  const [dataPublications, setDataPublications] = useState([]);
  

  useEffect(() => {
    const apiUrl = "http://192.168.1.65:3500/products/get?limit=" + limit + "&sort=" + sortName +"&search=" + searchWord +  "&sortType=" + sortType +"&priceMin=" + priceMin + "&priceMax=" + priceMax;
    fetch(apiUrl)
      .then(response => response.json())
      .then(result => setDataPublications(result.data))
      .catch(err => console.error(err));
  }, [limit, sortName, searchWord, sortType, priceMin, priceMax]);

  let data = [];
  if(dataPublications.length !== 0){
    data = dataPublications;
  }

  const handleChangeLimit = (e) => {
    setLimit(e.target.value);
  }

  const handleSortName = (e) => {
    let text = e.target.getElementsByClassName("sortName")[0].innerText;
    setSortName(text);
  }
  const changeInput = (e) => {
    if( e.target.id === "search" ){
      setSearchWord(e.target.value);
    }
    else if( e.target.id === "priceMin" ){
      setPriceMin(e.target.value);
    }
    else if( e.target.id === "priceMax" ){
      setPriceMax(e.target.value);
    }
    else{}

  }
  const handleSortType = (e) => {
    let text = e.target.value.toLowerCase();
    setSortType(text);
  }

  return (
    <Fragment>
      <div className="flexContainer">
        <Show limit={limit} handleChangeLimit={handleChangeLimit} />
        <Price changeInput={changeInput} priceMin={priceMin} priceMax={priceMax} />
        <Search changeInput={changeInput} searchWord={searchWord} />
      </div>
      <Table handleSortName={handleSortName} handleSortType={handleSortType} sortName={sortName} data={data} />
    </Fragment>
);
}

export default App;