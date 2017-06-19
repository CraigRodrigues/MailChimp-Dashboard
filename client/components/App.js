import React from 'react'
import GrommetApp from 'grommet/components/App'
import Article from 'grommet/components/Article'
import Nav from './Nav'
// import Homepage from './Homepage'
import MemberSince from './MemberSince'
import SubscriberCount from './SubscriberCount'
import TotalEmails from './TotalEmails'
import OpenClickRates from './OpenClickRates'
import TopLocations from './TopLocations'
import CountryCount from './CountryCount'
import LastSubscriber from './LastSubscriber'
import Clients from './Clients'
import Map from './Map'
import Footer from './Footer'

export default () => (
  <div>
    <GrommetApp centered scrollStep={false}>
      <Nav />
      <Article full='vertical' margin='small'>
        <MemberSince />
        <SubscriberCount />
        <TotalEmails />
        <OpenClickRates />
        <TopLocations />
        <CountryCount />
        <LastSubscriber />
        <Clients />
        <Map />
      </Article>
      <Footer />
    </GrommetApp>
  </div>
)
