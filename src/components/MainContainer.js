import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [inPortfolio, setInPortfolio] = useState([]);
  const [filterBy, setFilterBy] = useState('All');

  useEffect(()=>{
    fetch('http://localhost:3001/stocks')
      .then((res)=>res.json())
      .then((stockObj)=>setStocks(stockObj))
  },[])


  function addToPortfolio(stock){
    const portfolioStocks = inPortfolio.find((stockInPort)=>{
      return stockInPort.id === stock.id;
    })
    if(!portfolioStocks){
      setInPortfolio([...inPortfolio,stock])
    } 
    
  }

  function removefromPortfolio(deletedStock){
    const updatedStocks = inPortfolio.filter((stock)=>{
      return stock.id !== deletedStock.id;
    })

    setInPortfolio(updatedStocks)
    
  }

  const stocksToDisplay = stocks.filter((stock)=>{
    if(filterBy === 'All'){
      return true;
    } else{
      return stock.type === filterBy;
    }
  })


  return (
    <div>
      <SearchBar stocks={stocks} setStocks={setStocks} setFilterBy={setFilterBy}/>
      <div className="row">
        <div className="col-8">
          <StockContainer 
            stocks={stocksToDisplay} 
            setStocks={setStocks} 
            addToPortfolio={addToPortfolio}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer 
            inPortfolio={inPortfolio}
            removeFromPortfolio={removefromPortfolio} 
            />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
