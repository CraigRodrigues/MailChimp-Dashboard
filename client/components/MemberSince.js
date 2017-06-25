import React from 'react'
import { convertDate } from '../utils.js'
import Animate from 'grommet/components/Animate'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import MembershipCounter from './MembershipCounter'

export default ({ memberSince }) => {
  let timeAsMember = convertDate(memberSince)

  return (
    <Animate enter={{'animation': 'slide-up', 'duration': 1000, 'delay': 0}}>
      <Box direction='column'
        align='center'
        alignContent='center'
        textAlign='center'
        full='horizontal'
        pad='medium'>
        <Heading align='center'
          tag='h2'>
          MailChimp User Since { timeAsMember }
        </Heading>
        <MembershipCounter time={memberSince} />
      </Box>
    </Animate>
  )
}
