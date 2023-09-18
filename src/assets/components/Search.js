import React from "react";
import {MdSearch} from "react-icons/md";

function Search({handleSearchNote}){
    return(
        <div className="search">
            <MdSearch className="search-icons" size="1.3em" />
            <input type='text' onChange={(e)=>handleSearchNote(e.target.value)} placeholder="Escriba para buscar .." />
        </div>
    )
}

export default Search;