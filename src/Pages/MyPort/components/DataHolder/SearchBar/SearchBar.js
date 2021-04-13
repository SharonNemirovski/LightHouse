import React from 'react'
import  {FaSearch}  from "react-icons/fa";
import "./Search.scss"
function SearchBar() {
    return (
        <div className="search">
            <div className="click" for="check"><FaSearch/></div>
            <input maxLength = {15} className = "IPinput" type="text" placeholder=".. של מתג IP הכנס כתובת"></input>
        </div>
    )
}

export default SearchBar
