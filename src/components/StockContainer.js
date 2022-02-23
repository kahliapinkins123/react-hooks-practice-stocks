import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, addToPortfolio}) {
  

  // stocks.map((stock)=>{
  //   return <Stock key={stock.id} stock={stock} onStockClick={addToPortfolio}/>
  // })

  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock)=><Stock key={stock.id} stock={stock} onStockClick={addToPortfolio}/>)}
    </div>
  );
}

export default StockContainer;
