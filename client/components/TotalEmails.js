import React from 'react'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Value from 'grommet/components/Value'
import MailIcon from 'grommet/components/icons/base/Mail'

export default () => (
  <Box direction='column'
    align='center'
    alignContent='center'
    textAlign='center'
    full='horizontal'
    pad='small'>
    <Heading align='center'
      tag='h2'>
      Emails Sent
    </Heading>
    <Value value={'120,279'}
      icon={
        <MailIcon size='large'
          colorIndex='grey-1-a'
        />}
      responsive
      reverse={false}
      colorIndex='grey-1-a'
      size='large' />
  </Box>
)
