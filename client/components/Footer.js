import React from 'react'
import GrommetFooter from 'grommet/components/Footer'
import Image from 'grommet/components/Image'
import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'

export default () => (
  <GrommetFooter
    size='small'
    pad='small'
    direction='column'
    flex>
    <a href='https://blog.mailchimp.com/how-tough-conversations-fuel-mailchimps-community-involvement/'>
      <Image size='thumb' src='/assets/mothership.png' fit='contain' />
    </a>
    <a href='http://www.mailchimp.com'>
      <Image size='small' src='/assets/mc_script_black.png' fit='contain' />
    </a>
    <Box direction='row'
      align='center'
      pad={{'between': 'medium'}}>
      <Paragraph margin='none'>
        Made by <a href='http://www.craigrodrigues.com'>Craig Rodrigues</a>
      </Paragraph>
    </Box>
  </GrommetFooter>
)
