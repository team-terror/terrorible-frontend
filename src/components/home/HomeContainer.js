import React from 'react'
import PropTypes from 'prop-types'
import Navigation from '../shared/Navigation'
import SearchListings from './SearchListings'
import SignUp from '../modals/SignUp'

const HomeContainer = (props) => {

  function showModal(e) {
    const signUpModal = document.querySelector('.signupmodal')
    console.log(e);
    console.log(signUpModal);
    signUpModal.classList.remove('hide')
  }

  return (
    <div className="home-wrapper">

      <Navigation/>

      <SignUp/>

      <div className="splash-wrapper">
        <img src={require("../../images/hotelroom-bw-1.png")}
          className="full-width-img"
          alt="hotel room"/>
        <div className="sign-up-wrapper">
          <button className="sign-up-button" onClick={showModal}>Sign Up</button>
          <p className="log-in-button pt-1"><a href="#" className="white">Log in</a></p>
        </div>
      </div>

      <SearchListings/>

    </div>
  )
}

export default HomeContainer
