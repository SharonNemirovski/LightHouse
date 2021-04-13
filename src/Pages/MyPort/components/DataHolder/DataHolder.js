import React from 'react'
import Card from "./DataCard/DataCard"
import SearchBar from "./SearchBar/SearchBar"
import "./DataHolder.scss"
function DataHolder() {
    return (
        <div className="CardsHolder">
            <Card 
            component1={<SearchBar/>}
            component2 ={<div className="ConfButton"><h2>Config Chosen Ports</h2></div>}
            component3={null}/>
            <Card 
            component1={<h3>Switch Name: SW-USR-38-547R</h3>}
            component2={<h3>Model: Catalyst 2960 24p</h3>}
            component3 ={<h3>PoE Support: YES</h3>}/>
        </div>
    )
}

export default DataHolder
