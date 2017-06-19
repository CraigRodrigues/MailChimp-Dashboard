import React from 'react'
import Box from 'grommet/components/Box'
import Headline from 'grommet/components/Headline'
import MembershipCounter from './MembershipCounter'

export default () => (
  <Box direction='column'
    align='center'
    alignContent='center'
    textAlign='center'
    full='horizontal'
    pad='small'
    separator='bottom'>
    <Headline size='small' strong>
      MailChimp User Since January 11, 2011
    </Headline>
    <MembershipCounter />
  </Box>
)
