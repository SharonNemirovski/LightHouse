import React from 'react'
import "./DataCard.scss"
function DataCard({component1,component2,component3}) {
    return (
        <div className="Card">
            {component1}
            {component2}
            {component3}
        </div>
    )
}

export default DataCard
