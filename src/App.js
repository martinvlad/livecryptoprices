import React, { Component, useState, useEffect } from 'react';
import './App.css';
import Btc from './btc/Btc';
import Usd from './btc/USD';
import bitcoin from './bitcoin.png';

function App() {
  const [price, setPrice] = useState(0)
  const [speed, setspeed] = useState(5)
  const [USDprice, setUSDprice] = useState(1)
  const [cryptos, setCryptos] = useState([])
  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)
  const mainurl = 'https://api.coindesk.com/v1/bpi/currentprice.json';
  
  let toAmount,fromAmount ;
if(amountInFromCurrency){
  
  fromAmount = amount * price;
  toAmount  = price / price;
}
else{
  toAmount = USDprice;
  fromAmount = USDprice * price;
  
  
  
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

    function handleFromAmountChange(e){
      setAmount(e.target.value)
      setAmountInFromCurrency(true)
      
      }
      function handleToAmountChange(e){
        setAmount(e.target.value)
        setAmountInFromCurrency(false)
       
        
        }
    console.log(price + ' price is the btc price')
    console.log(USDprice + 'USDPrice is the USDprice')
  return (
    <div className="main">
      
  <h1>The current price of Bitcoin is  {`  $${price.toFixed(2)}`}</h1>
  
  <h5>Time is the ultimate luxury...HODL 4 Life</h5>
  <img style={{animation: `spin ${speed}s linear infinite`}} src={bitcoin} alt="bitcoin" className="logo" width="150px" />;
      <div className="box">
      <Usd
      name="USD" 
      price={price} 
      //onChangeAmount = {handleFromAmountChange}
      amount={fromAmount}
      />

      <h1>   =   </h1>

      <Btc 
      name="BTC" 
      price={USDprice} 
      //onChangeAmount = {handleToAmountChange}
      amount={toAmount}
      />
      </div>
    </div>
  );
}

export default App;
