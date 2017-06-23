import React from 'react'
import { convertDate } from '../utils.js'
import Animate from 'grommet/components/Animate'
import Box from 'grommet/components/Box'
import Headline from 'grommet/components/Headline'
import MembershipCounter from './MembershipCounter'

export default ({ memberSince }) => {
  let timeAsMember = convertDate(memberSince)

  return (
    <Animate
      enter={{'animation': 'slide-up', 'duration': 1000, 'delay': 0}} >
      <Box direction='column'
        align='center'
        alignContent='center'
        textAlign='center'
        full='horizontal'
        pad='medium'>
        <Headline size='small' strong>
          MailChimp User Since {timeAsMember}
        </Headline>
        <MembershipCounter time={memberSince} />
      </Box>
    </Animate>
  )
}
