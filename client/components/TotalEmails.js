import React from 'react'
import { calculateTotalEmails } from '../utils'
import Animate from 'grommet/components/Animate'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Value from 'grommet/components/Value'
import MailIcon from 'grommet/components/icons/base/Mail'

export default ({ campaigns }) => {
  let totalEmails = calculateTotalEmails(campaigns)

  return (
    <Animate enter={{'animation': 'slide-up', 'duration': 1000, 'delay': 0}}>
      <Box flex
        justify='center'
        direction='column'
        align='center'
        alignContent='center'
        textAlign='center'
        pad='small'>
        <Heading align='center'
          tag='h2'>
          <MailIcon />
          {' '}Emails Sent
        </Heading>
        <Value value={Number(totalEmails).toLocaleString()}
          responsive
          colorIndex='grey-1-a'
          size='large' />
      </Box>
    </Animate>
  )
}
