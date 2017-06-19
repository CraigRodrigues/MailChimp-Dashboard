import React from 'react'
import Article from 'grommet/components/Article'
import MemberSince from './MemberSince'
import SubscriberCount from './SubscriberCount'
import TotalEmails from './TotalEmails'
import OpenClickRates from './OpenClickRates'
import TopLocations from './TopLocations'
import CountryCount from './CountryCount'
import LastSubscriber from './LastSubscriber'
import Clients from './Clients'
import Map from './Map'

export default () => (
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
)