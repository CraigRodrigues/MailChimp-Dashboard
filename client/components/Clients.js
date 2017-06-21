import React from 'react'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import ClientsDoughnutChart from './ClientsDoughnutChart'

export default ({clients}) => (
  <Box direction='column'
    align='center'
    alignContent='center'
    alignSelf='center'
    textAlign='center'
    full={false}
    basis='1/2'
    pad='small'
    separator='right'>
    <Heading align='center' tag='h2'>
      Clients
    </Heading>
    <ClientsDoughnutChart clients={clients} />
  </Box>
)
