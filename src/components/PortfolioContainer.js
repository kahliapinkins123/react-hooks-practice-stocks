import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ inPortfolio, removeFromPortfolio }) {

  const portfolioList = inPortfolio.map((stock)=>{
    return <Stock key={stock.id} stock={stock} onStockClick={removeFromPortfolio}/>
  })
  
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portfolioList
      }
    </div>
  );
}

export default PortfolioContainer;
