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

            <div className="splash-wrapper">
              <img src={require("./images/hotelroom-bw-1.png")}
                className="full-width-img"
                alt="hotel room"/>
              <div className="sign-up-wrapper">
                <button className="sign-up-button">Sign Up</button>
                <p className="log-in-button pt-1"><a href="#" className="white">Log in</a></p>
              </div>
            </div>

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

          </div>
        }/>
      </Router>
    )
  }
}

export default App
