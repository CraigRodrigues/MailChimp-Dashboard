import React from 'react'
import GrommetApp from 'grommet/components/App'
import Article from 'grommet/components/Article'
import Nav from './Nav'
// import Homepage from './Homepage'
import MemberSince from './MemberSince'
import SubscriberCount from './SubscriberCount'
import TotalEmails from './TotalEmails'
import Footer from './Footer'

export default () => (
  <div>
    <GrommetApp centered scrollStep={false}>
      <Nav />
      <Article full='vertical'>
        <MemberSince />
        <SubscriberCount />
        <TotalEmails />
      </Article>
      <Footer />
    </GrommetApp>
  </div>
)
