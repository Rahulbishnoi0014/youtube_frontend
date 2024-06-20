import React from 'react'
import "./searchBar.css"
import {FaSearch} from "react-icons/fa";
import {BsMicFill} from "react-icons/bs"

const SearchBar = () => {
    return (
        <>
            <div className='searchbar_container'>
                <div className='searchbar_container2'>
                    <div className='search_div'>
                        <input type='text' className='ibox_searchbar' placeholder='Search'></input>
                            <FaSearch className='seacrhicon_searchbar' />
                    </div>
                            <BsMicFill className="micicon_searchbar"/>
                </div>

            </div>

        </>
    )
}

export default SearchBar