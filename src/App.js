import React, {  useState, useEffect } from 'react';
import './App.css';
import {Dimmer, Loader, Select, Card} from 'semantic-ui-react';
import Chart from 'react-apexcharts';
import 'semantic-ui-css/semantic.min.css'

import bitcoin from './bitcoin.png';

const options = [{value: "USD", text: "USD", symbol:"$"},{value: "EUR", text: "EUR", symbol: "€"},{value: "GBP", text: "GBP", symbol: ""} ]

function App() {
  
  const [priceData, setPriceData] = useState(null)
  const [speed] = useState(5);
  const [currency, setCurrency] = useState("USD");
  const [chartData, setChartData] = useState(null);
  const [series, setSeries] = useState(null);
  const [loading, setLoading] = useState(true)

  
  const mainurl = 'https://api.coindesk.com/v1/bpi/currentprice.json';
  
  
  

  useEffect(()=> {

    async function fetchData() {
    const res = await fetch(mainurl);
      const data = await res.json();
      setPriceData(data.bpi);
      getChartData();
    }
    fetchData();
  }, []);

   const handleSelect = (e, data) => {
    setCurrency(data.value)
   }

   const getChartData = async() =>{
     const res = await fetch("https://api.coindesk.com/v1/bpi/historical/close.json")
     const data = await res.json();
     const categories = Object.keys(data.bpi);
     console.log(categories)
     const series = Object.values(data.bpi);
     console.log(series)
     setChartData({
       xaxis: {
         categories: categories
       }
     })
     setSeries([
        {
       name: "Bitcoin Price",
       data: series
        }
     ])
     setLoading(false);
   }
    
  return (
    
    <div className="App"  >
            <div className="nav" style={{padding: 15, backgroundColor: "orange"}}>
        CoinDesk API - BTC Price
           </div>
           <div style={{alignItems: "center", textAlign: "center", padding:15}}>
           <img style={{animation: `spin ${speed}s linear infinite` }} src={bitcoin} alt="bitcoin" className="logo" width="150px" />;
           </div>
           
    {
    loading ? (
      <div>
        <Dimmer active inverted> 
        <Loader>Loading</Loader>
        
        </Dimmer>
      </div>
    ) : ( 
      <>
    <div className="price-container" style={{ 
      display: "flex",
     justifyContent: "space-around",
      alignItems: "center", 
      width: 600, 
      height: 100, 
      margin: "0 auto"
      }}> 
              <div className="form">
      <Select
      placeholder="Select currency" 
      onChange={handleSelect} 
      options={options}></Select>
              </div>
              <div className="price">
                <Card>
                  <Card.Content>
    <Card.Header>{currency} Currency</Card.Header>
    <Card.Description>{priceData[currency].rate}</Card.Description>
                  </Card.Content>
                  
                </Card>
              </div>
             
    </div>
    <div style={{display: "flex", justifyContent: "center", paddingBottom: "20px", margin: 0}}> 
    <Chart options={chartData} series={series} type="line" height='400' width='800' /></div>
   </>
    )}
   </div>
  );
}

export default App;
