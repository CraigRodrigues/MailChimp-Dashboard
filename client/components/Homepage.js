import React from 'react'
// import Article from 'grommet/components/Article'
import Box from 'grommet/components/Box'
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
    <Box flex='shrink' direction='row' justify='center' align='center'>
      <Box>
        <SubscriberCount numberOfSubscribers={account.total_subscribers} />
        <TotalEmails campaigns={campaigns} />
        <OpenClickRates industryRate={account.industry_stats} myStats={listStats} />
      </Box>
      <Box alignContent='stretch' alignSelf='stretch'>
        <Clients clients={clients} />
      </Box>
    </Box>
    <Box flex direction='row' justify='center' align='center'>
      <TopLocations countries={locations} />
    </Box>
    <Box flex direction='row' justify='center' align='center'>
      <CountryCount countries={locations} />
      <LastSubscriber listStats={listStats} />
    </Box>
    <Map countries={locations} />
  </div>
)
