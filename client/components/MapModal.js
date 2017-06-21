import React from 'react'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'

export default ({ continent, count }) => (
  <Box responsive
    direction='column'
    align='center'
    alignContent='center'
    textAlign='center'
    full={false}
    pad='medium'>
    <Heading uppercase
      strong={false}
      truncate={false}
      align='center'
      margin='small'>
      { continent }
    </Heading>
    <Heading tag='h3'
      uppercase={false}
      strong={false}
      truncate={false}
      align='center'
      margin='small'>
      Subscribers in { count } countries
    </Heading>
  </Box>
)
