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

export default (props) => (
  <Article full='vertical' margin='small'>
    <MemberSince memberSince={props.account.member_since} />
    <SubscriberCount numberOfSubscribers={props.account.total_subscribers} />
    <TotalEmails campaigns={props.campaigns} />
    <OpenClickRates industryRate={props.account.industry_stats} myStats={props.listStats} />
    <TopLocations countries={props.locations} />
    <CountryCount countries={props.locations} />
    <LastSubscriber />
    <Clients />
    <Map />
  </Article>
)
