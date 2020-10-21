import React from 'react'

export default function Btc(props) {
    const arrayofprices = ['BTC', 'ETH', 'XMR', 'BCC','DOGE']
    const {
        price
    } = props
    
    return (
        <div>
            <input type="number" pattern="[0-9]*"className="input" value={price} />
            <select id="mySelect"value={crypto} key={crypto} >
            {arrayofprices.map(crypto =>(
                    <option key={crypto} value ={crypto}>{crypto}</option>
                    
                ))}
               
                </select>
            
        </div>
    )
}
