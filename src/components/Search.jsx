import React from 'react';
//import './styles/Search.css';

function Search () {
    return (
        <div className="search-container">
            <input 
                type="text" 
                placeholder="Search..." 
                className="search-box" 
                // onChange={handleInput}
                // onKeyPress={searchM}
                />
        </div>

    )
}
export default Search