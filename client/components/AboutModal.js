import React from 'react'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'
import SocialGithubIcon from 'grommet/components/icons/base/SocialGithub'
import PlatformReactjsIcon from 'grommet/components/icons/base/PlatformReactjs'

export default () => (
  <Box responsive
    direction='column'
    align='center'
    alignContent='center'
    textAlign='center'
    full={false}
    pad='medium'>
    <Heading uppercase
      strong={false}
      truncate={false}
      align='center'
      margin='small'>
      About
    </Heading>
    <Paragraph>
      Project created by me, <a href='http://www.craigrodrigues.com'>Craig Rodrigues</a>. I'm a software engineer living in Atlanta, GA.
      I wanted to use the <a href='http://developer.mailchimp.com/'>MailChimp API V3</a> to get make a visualization dashboard for my business <a href='www.ggbutton.com'>GG Button!</a>
    </Paragraph>
    <Paragraph>
      By default the data shown is just mine (from GG Button). However, you can load your own data by inputting your API and datacenter. To unload your data, just select that option from the menu.
    </Paragraph>
    <Paragraph>
      This dashboard was created using: React, Node, Express, ChartJS, Grommet and, of course...MailChimp's API! 🤘
    </Paragraph>
    <Paragraph>
      Gitub Repo here:{' '}
      <a href='https://github.com/CraigRodrigues/MailChimp-Dashboard'>
        <SocialGithubIcon size='small' />
      </a>
    </Paragraph>
    <PlatformReactjsIcon />
  </Box>
)
