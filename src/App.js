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
      
  <h1>The current value of Bitcoin is  {`  $${price}`}</h1>
  <h2 >Still working on the math below...check back soon</h2>
  <img style={{animation: `spin ${speed}s linear infinite`}} src={bitcoin} alt="bitcoin" width="150px" />;
      
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
  );
}

export default App;
