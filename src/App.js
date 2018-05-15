import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './css/App.css'
import './css/navigation.css'
import './css/home.css'

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={ props =>
          <div>
            <nav>
              <i className="material-icons">stars</i>
              <i className="material-icons">menu</i>
            </nav>
            <div id="splash-wrapper">
              <img src={require("./images/hotelroom-bw-1.png")}
                className="full-width-img"
                alt="hotel room"/>
              <div className="sign-up-wrapper">
                <button className="sign-up-button">Sign Up</button>
                <p className="log-in-button pt-1"><a href="#" className="white">Log in</a></p>
              </div>

            </div>
          </div>
        }/>
      </Router>
    )
  }
}

export default App
