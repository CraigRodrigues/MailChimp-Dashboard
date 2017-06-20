import React, { Component } from 'react'
// import axios from 'axios'
import GrommetApp from 'grommet/components/App'
import Nav from './Nav'
import Homepage from './Homepage'
import Footer from './Footer'

export default class App extends Component {
  constructor () {
    super()
    this.state = {}
  }

  componentWillMount () {
    // Grab info from API
    // Set state with it
  }

  render () {
    return (
      <div>
        <GrommetApp>
          <Nav />
          <Homepage />
          <Footer />
        </GrommetApp>
      </div>
    )
  }
}
