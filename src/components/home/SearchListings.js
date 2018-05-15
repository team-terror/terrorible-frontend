import React from 'react'
import PropTypes from 'prop-types'

const SearchListings = (props) => {
  return (
    <div className="search-wrapper">
      <input type="text"
        placeholder="Search"
        className="wide"></input>
      <div className="listings-wrapper pt-2">
        <div className="listing">
          <img src="http://www.facetheforce.today/bb8"
            className="listing-thumbnail"
            alt="listing image"/>
          <div>
            <p className="listing-address">This is the address</p>
            <p className="listing-description">Semiotics messenger bag kinfolk thundercats subway tile fixie mlkshk, waistcoat blue bottle cliche shabby chic taxidermy. Put a bird on it portland keytar blue bottle, food truck franzen chicharrones blog taiyaki kale chips.</p>
            <p><a href="#">View Listing</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchListings
