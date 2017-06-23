import React from 'react'
import { convertDate } from '../utils.js'
import Box from 'grommet/components/Box'
import Headline from 'grommet/components/Headline'
import MembershipCounter from './MembershipCounter'

export default ({ memberSince }) => {
  let timeAsMember = convertDate(memberSince)

  return (
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
  )
}
