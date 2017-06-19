import React from 'react'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import LocationsBarChart from './LocationsBarChart'

export default () => (
  <Box direction='column'
    align='center'
    alignContent='center'
    textAlign='center'
    full='horizontal'
    pad='small'>
    <Heading align='center'
      tag='h2'>
      Top 10 Locations
    </Heading>
    <LocationsBarChart />
  </Box>
)
