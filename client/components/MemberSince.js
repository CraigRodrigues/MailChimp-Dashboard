import React from 'react'
import utils from '../utils.js'
import Box from 'grommet/components/Box'
import Headline from 'grommet/components/Headline'
import MembershipCounter from './MembershipCounter'

export default (props) => {
  let memberSince = utils(props.memberSince)

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
