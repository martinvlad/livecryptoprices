import React from 'react'

export default function Btc(props) {
    const arrayofprices = ['BTC']
    const {
        price,
        onChangeAmount,
        amount
    } = props
    
    return (
        <div>
            <input type="number" pattern="[0-9]*"className="input" value={amount} onChange={onChangeAmount} />
            <select id="mySelect"value={crypto} key={crypto} >
            {arrayofprices.map(crypto =>(
                    <option key={crypto} value ={crypto}>{crypto}</option>
                    
                ))}
               
                </select>
            
        </div>
    )
}
