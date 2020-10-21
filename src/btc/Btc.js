import React from 'react'

export default function Btc(props) {
    const arrayofprices = ['BTC', 'ETH', 'XMR', 'BCC','DOGE']

    
    return (
        <div>
            <input type="text" pattern="[0-9]*"className="input" value={props.price} />
            <select id="mySelect"value={crypto} key={crypto} >
            {arrayofprices.map(crypto =>(
                    <option key={crypto} value ={crypto}>{crypto}</option>
                    
                ))}
               
                </select>
            
        </div>
    )
}
