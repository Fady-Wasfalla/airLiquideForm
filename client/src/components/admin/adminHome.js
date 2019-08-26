import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import header from './adminHeader'

class adel extends Component {
  render () {
    return (
      <Router>
        <Route component={header} />
      </Router>
    )
  }
}

export default adel
