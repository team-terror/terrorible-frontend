import React from 'react'
import PropTypes from 'prop-types'
import Listing from './Listing'

const SearchListings = (props) => {
  return (
    <div className="search-wrapper">
      <input type="text"
        placeholder="Search"
        className="wide"></input>
      <div className="listings-wrapper">
        <Listing/>
        <Listing/>
        <Listing/>
        <Listing/>
      </div>
    </div>
  )
}

export default SearchListings
