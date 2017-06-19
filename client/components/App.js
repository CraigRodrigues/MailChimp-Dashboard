import React from 'react'
import GrommetApp from 'grommet/components/App'
import Article from 'grommet/components/Article'
import Nav from './Nav'
// import Homepage from './Homepage'
import Footer from './Footer'

export default () => (
  <div>
    <GrommetApp centered scrollStep={false}>
      <Nav />
      <Article
        colorIndex='light-2'
        full='vertical'>
      </Article>
      <Footer />
    </GrommetApp>
  </div>
)
