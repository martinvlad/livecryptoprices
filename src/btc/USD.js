import React from 'react'

export default function USD(props) {

    const base = "USD";

    return (
        <div>
            <input type="text" pattern="[0-9]*"className="input" />
            <select value='USD' key="USD">
            {<option>{base}</option>}
               
                </select>
            
        </div>
    )
}

