import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, onBuyAndSell}) {

  const displayedStocks = stocks.map(stock => {
    if (stock.bought === false){
    return (
      <Stock key={stock.id} stock={stock} onBuyAndSell={onBuyAndSell} /> 
    )
  }})

  return (
    <div>
      <h2>Stocks</h2>
      {displayedStocks}
    </div>
  );
}

export default StockContainer;
