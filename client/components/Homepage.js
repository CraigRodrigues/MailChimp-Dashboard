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

export default ({account, campaigns, listStats, locations, clients}) => (
  <Article full='vertical' margin='small'>
    <MemberSince memberSince={account.member_since} />
    <SubscriberCount numberOfSubscribers={account.total_subscribers} />
    <TotalEmails campaigns={campaigns} />
    <OpenClickRates industryRate={account.industry_stats} myStats={listStats} />
    <TopLocations countries={locations} />
    <CountryCount countries={locations} />
    <LastSubscriber listStats={listStats} />
    <Clients clients={clients} />
    <Map countries={locations} />
  </Article>
)
