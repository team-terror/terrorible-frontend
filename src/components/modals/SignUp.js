import React from 'react'
import PropTypes from 'prop-types'

const SignUp = (props) => {
  return (
    <div className="modal">
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
