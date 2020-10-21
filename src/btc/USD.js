import React from 'react'

export default function USD(props) {
    const {
        price
    } = props
    
    const base = "USD";

    return (
        <div>
            <input type="number" pattern="[0-9]*"className="input"  value={price}/>
            <select value='USD' key="USD">
            {<option>{base}</option>}
               
                </select>
            
        </div>
    )
}

