import React, { Component } from 'react'
import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Box from 'grommet/components/Box'
import Menu from 'grommet/components/Menu'
import Anchor from 'grommet/components/Anchor'
import Actions from 'grommet/components/icons/base/Actions'

export default class Nav extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <Header fixed={true}
        size='medium'>
        <Title>
          MailChimp Dashboard
        </Title>
        <Box flex={true}
          justify='end'
          direction='row'
          responsive={false}>
          <Menu icon={<Actions />}
            dropAlign={{'right': 'right'}}>
            <Anchor href='#'
              className='active'>
              First
            </Anchor>
            <Anchor href='#'>
              Second
            </Anchor>
            <Anchor href='#'>
              Third
            </Anchor>
          </Menu>
        </Box>
      </Header>
    )
  }
}
