import React from 'react'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'
import SocialGithubIcon from 'grommet/components/icons/base/SocialGithub'

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
    <Paragraph margin='small'>
      Hi, I'm <a href='http://www.craigrodrigues.com'>Craig Rodrigues</a> 👋. I'm a software engineer living in Atlanta.
      I wanted to use the <a href='http://developer.mailchimp.com/'>MailChimp API V3</a> to make a visualization dashboard for my business <a href='www.ggbutton.com'>GG Button!</a>
    </Paragraph>
    <Paragraph margin='small'>
      By default the data shown is just mine (from GG Button). However, you can load your own data by inputting your API key from the menu. To reset everything just select that option at the bottom of the menu.
    </Paragraph>
    <Paragraph margin='small'>
      This was created using: React, Node, Express, ChartJS, Grommet and, of course, MailChimp's baller API! 🤘
    </Paragraph>
    <Paragraph margin='none'>
      Gitub Repo
    </Paragraph>
    <a href='https://github.com/CraigRodrigues/MailChimp-Dashboard'>
      <SocialGithubIcon size='small' />
    </a>
  </Box>
)
