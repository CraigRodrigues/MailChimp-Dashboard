import React from 'react'
import GrommetApp from 'grommet/components/App'
import Nav from './Nav'
import Homepage from './Homepage'
import Footer from './Footer'

export default () => (
  <div>
    <GrommetApp centered scrollStep={false}>
      <Nav />
      <Homepage />
      <Footer />
    </GrommetApp>
  </div>
)
