import React from 'react'
import GrommetFooter from 'grommet/components/Footer'
import Title from 'grommet/components/Title'
import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'

export default () => (
  <GrommetFooter justify='between'
    size='small'
    pad='small'
    flex>
    <Title>
      MailChimp Dashboard
    </Title>
    <Box direction='row'
      align='center'
      pad={{'between': 'medium'}}>
      <Paragraph margin='none'>
        © 2017 Craig Rodrigues
      </Paragraph>
    </Box>
  </GrommetFooter>
)
