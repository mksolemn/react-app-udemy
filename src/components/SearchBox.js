import React from "react";

const SearchBar = ({field, searchVal}) => {
    return (
        <div className='pa2'>
            <input className='pa3 ba b--green bg-lightest-blue'
                   type="text"
                   placeholder='search robots'
                   onChange={searchVal}/>
        </div>
    );
}

export default SearchBar;
