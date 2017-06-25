import React from 'react'
import Animate from 'grommet/components/Animate'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Value from 'grommet/components/Value'
import UserIcon from 'grommet/components/icons/base/User'

export default ({ numberOfSubscribers }) => (
  <Animate enter={{'animation': 'slide-up', 'duration': 1000, 'delay': 0}}>
    <Box flex direction='column'
      justify='center'
      align='center'
      alignContent='center'
      textAlign='center'
      pad='small'>
      <Heading align='center'
        tag='h2'>
        <UserIcon />
        {' '}Subscribers
      </Heading>
      <Value value={Number(numberOfSubscribers).toLocaleString()}
        responsive
        colorIndex='grey-1-a'
        size='large' />
    </Box>
  </Animate>
)
