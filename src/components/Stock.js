import React from "react";

function Stock({stock, onBuyAndSell}) {

  let {id, ticker, name, type, price, bought} = stock;
  
  function handleBuyClick(){
    let changedStock = {
      ...stock,
      bought: !bought
    };
    onBuyAndSell(changedStock)
  }

  return (
    <div onClick={handleBuyClick} >
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
