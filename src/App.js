import React, { Component, useState, useEffect } from 'react';
import './App.css';
import Btc from './btc/Btc';
import Usd from './btc/USD';


function App() {
  const [price, setPrice] = useState(0)
  
  const [cryptos, setCryptos] = useState([])
  const mainurl = 'https://api.coindesk.com/v1/bpi/currentprice.json';
  
  useEffect(()=> {
    fetch(mainurl)
    .then(res => res.json())
    .then(data =>{  
      const USDprice = data.bpi.USD.rate_float;
      console.log(USDprice)
      setPrice(USDprice)
    })
      //setPrice(USDprice);
      
    }, [])
  
  return (
    <div className="main">
      
      <h1>Live Crypto Prices</h1>
      
      <Usd name="USD" price={price}/><h1>   =   </h1><Btc name="BTC"/>
      
    </div>
  );
}

export default App;
