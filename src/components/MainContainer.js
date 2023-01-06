import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [sorting, setSorting] = useState("");
  const [filter, setFilter] = useState("");

  useEffect( ()=> {
    fetch("http://localhost:3001/stocks")
    .then(resp => resp.json())
    .then(data => {
      const newData = data.map(stock => {
        return {
          ...stock, 
          bought: false
        }
      })
      setStocks(newData);
      console.log(newData)
    })
  },[])

  function handleBuyAndSell(changedStock){
    const newStocks = stocks.map(stock => {
      if(stock.id === changedStock.id){
        return changedStock
      }
      return stock
    });
    setStocks(newStocks);
    console.log(stocks)
  }

  function handleSorting(sort){
    setSorting(sort);
  }

  function handleFilter(newFilter){
    setFilter(newFilter)
  };

  const sortedStocks = [...stocks].sort((stockA,stockB) => {
    if(sorting === "Alphabetically"){
      return stockA.name.toLowerCase().localeCompare(stockB.name.toLowerCase())
    }
    else if(sorting === "Price"){
      return stockA.price - stockB.price
    }
    else return 1
  });

  const filteredStocks = sortedStocks.filter(stock => filter === "" || stock.type === filter) ;


  return (
    <div>
      <SearchBar sorting={sorting} onSort={handleSorting} filter={filter} onFilter={handleFilter} />
      <div className="row">
        <div className="col-8">
          <StockContainer  stocks={filteredStocks} onBuyAndSell={handleBuyAndSell} />
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={filteredStocks} onBuyAndSell={handleBuyAndSell} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
