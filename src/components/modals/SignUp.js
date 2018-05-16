import React from 'react'
import PropTypes from 'prop-types'

const SignUp = (props) => {

  function closeModal(e) {
    const signUpModal = document.querySelector('.signupmodal')
    signUpModal.classList.add('hide')
  }

  return (
    <div className="signupmodal modal">
      <i onClick={closeModal}
        className="close material-icons">close</i>
      <h2>Sign Up</h2>
      <p>email</p>
      <input type="text"/>
      <p>password</p>
      <input type="password"/>
      <button>Sign Up</button>
    </div>
  )
}

export default SignUp
