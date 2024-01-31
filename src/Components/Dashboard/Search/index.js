import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import './style.css'
const Search = ({search,onSearchChange}) => {
    console.log(search)
  return (
    <div className='search-flex'>
        <SearchRoundedIcon/>
        <input type='text' placeholder='Search' value={search} onChange={(e)=>onSearchChange(e)}/>      
    </div>
  )
}

export default Search
