import React from 'react'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'

export default () => (
  <Box direction='column'
    align='center'
    alignContent='center'
    textAlign='center'
    full='horizontal'
    pad='small'>
    <Heading align='center'
      tag='h2'>
      Last Subscriber
    </Heading>
    <Heading align='center'
      tag='h3'>
      2 Days
    </Heading>
    <Heading align='center'
      tag='h3'>
      4 Hours
    </Heading>
    <Heading align='center'
      tag='h3'>
      10 Minutes
    </Heading>
  </Box>
)
