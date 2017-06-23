import React from 'react'
import Article from 'grommet/components/Article'
import Box from 'grommet/components/Box'
import Columns from 'grommet/components/Columns'
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
  <div>
    <MemberSince memberSince={account.member_since} />
    <SubscriberCount numberOfSubscribers={account.total_subscribers} />
    <TotalEmails campaigns={campaigns} />
    <OpenClickRates industryRate={account.industry_stats} myStats={listStats} />
    <TopLocations countries={locations} />
    <Columns size='medium'
      justify='center'
      maxCount={2}
      masonry={false} >
      <Box align='center' margin='small'>
        <Clients clients={clients} />
      </Box>
      <Box align='center'
        margin='small'
        alignSelf='center'>
        <CountryCount countries={locations} />
        <LastSubscriber listStats={listStats} />
      </Box>
    </Columns>
    <Map countries={locations} />
  </div>
)
