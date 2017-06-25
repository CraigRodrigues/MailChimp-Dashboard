import React from 'react'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import LocalIcon from 'grommet/components/icons/base/Local'
import LocationsBarChart from './LocationsBarChart'

export default ({ countries }) => (
  <Box
    flex='shrink'
    direction='column'
    align='center'
    alignContent='center'
    alignSelf='stretch'
    textAlign='center'
    pad='small'>
    <Heading align='center'
      tag='h2'>
      <LocalIcon />
      {' '}Top 10 Locations
    </Heading>
    <LocationsBarChart countries={countries.slice(0, 10)} />
  </Box>
)
