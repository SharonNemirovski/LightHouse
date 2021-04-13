import React from 'react'
import "./Port.scss"
function Port({name , status ,mac , vlan}) {
    return (
        <div className = "port">
            <input type="checkbox"/>
            <span>{name}</span>
            <span>{status}</span>
            <span>{mac}</span>
            <span>{vlan}</span>
            
        </div>
    )
}

export default Port
