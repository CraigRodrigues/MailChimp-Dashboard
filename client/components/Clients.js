import React from 'react'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import ClientsDoughnutChart from './ClientsDoughnutChart'

export default () => (
  <Box direction='column'
    align='center'
    alignContent='center'
    textAlign='center'
    full='horizontal'
    pad='small'>
    <Heading align='center' tag='h2'>
      Clients
    </Heading>
    <ClientsDoughnutChart />
  </Box>
)
