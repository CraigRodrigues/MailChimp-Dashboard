import React from 'react'
import moment from 'moment'
import Box from 'grommet/components/Box'
import Headline from 'grommet/components/Headline'
import MembershipCounter from './MembershipCounter'

const convertDate = (time) => {
  return moment(time).format('MMMM DD, YYYY')
}

export default (props) => {
  let memberSince = convertDate(props.memberSince)

  return (
    <Box direction='column'
      align='center'
      alignContent='center'
      textAlign='center'
      full='horizontal'
      pad='small'
      separator='bottom'>
      <Headline size='small' strong>
        MailChimp User Since {memberSince}
      </Headline>
      <MembershipCounter />
    </Box>
  )
}
