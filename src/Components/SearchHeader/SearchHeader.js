import React from 'react'
import Icon from '../../Images/icon-button.png'
import Search from '../Search/Search'
import './SearchHeader.css'

function SearchHeader() {
  return (
    <div className='searchHeader'>
       <div className="search-wrapper">
            <Search/>            
        </div>
        <div className="notificationIcon">
        <img src={Icon} alt="Icon" />
        </div>
    </div>
  )
}

export default SearchHeader
