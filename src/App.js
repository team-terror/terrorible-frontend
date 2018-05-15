import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomeContainer from './components/home/HomeContainer'

import './css/App.css'
import './css/navigation.css'
import './css/home.css'

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={ props =>
            <HomeContainer/>
        }/>
      </Router>
    )
  }
}

export default App
