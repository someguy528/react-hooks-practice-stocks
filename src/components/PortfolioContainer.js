import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stocks, onBuyAndSell}) {

  const portfolioStocks = stocks.map(stock => {
    if(stock.bought === true){
      return(
          <Stock key={stock.id} stock={stock} onBuyAndSell={onBuyAndSell} /> 
      )
    }
  })

  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioStocks}
    </div>
  );
}

export default PortfolioContainer;
