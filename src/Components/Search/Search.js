import React from 'react'
import './Search.css'


function Search(props) {
  // const getCountryListByName = props.getCountryListByName
    
  return (
    <div className='search'>
        <input type="text" id="searchInput" placeholder="Search" onChange={(e)=>{
           console.log(e.target.value)
          //  getCountryListByName(e.target.value)
        }}></input>

    </div>
  )
}

export default Search