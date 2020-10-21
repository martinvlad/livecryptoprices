import React, { Component, useState, useEffect } from 'react';
import './App.css';
import Btc from './btc/Btc';
import Usd from './btc/USD';


function App() {
  const [price, setPrice] = useState(0)
  const [USDprice, setUSDprice] = useState(1)
  const [cryptos, setCryptos] = useState([])
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)
  const mainurl = 'https://api.coindesk.com/v1/bpi/currentprice.json';
  
  let toAmount,fromAmount ;
  if(amountInFromCurrency){
    
    toAmount = USDprice * price;
  }
  else{
    fromAmount = price(USDprice) / price 
  }

  useEffect(()=> {
    fetch(mainurl)
    .then(res => res.json())
    .then(data =>{  
      console.log(data)
      const USDprice = data.bpi.USD.rate_float;
      
      setPrice(USDprice)
      
    })
      
      
    }, [])
    console.log(price)
  return (
    <div className="main">
      
      <h1>Live Crypto Prices</h1>
      
      <Usd name="USD" price={price}/><h1>   =   </h1><Btc name="BTC" price={USDprice}/>
      
    </div>
  );
}

export default App;
