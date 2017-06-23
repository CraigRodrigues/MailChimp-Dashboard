import React, { Component } from 'react'
import Header from 'grommet/components/Header'
import Heading from 'grommet/components/Heading'
import Box from 'grommet/components/Box'
import Menu from 'grommet/components/Menu'
import Image from 'grommet/components/Image'
import Anchor from 'grommet/components/Anchor'
import DownIcon from 'grommet/components/icons/base/Down'

export default class Nav extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    console.log(this.props)
    let { first_name, last_name } = this.props.account

    return (
      <Header
        fixed
        pad={{horizontal: 'small'}}
        full='horizontal'>
        <Box basis='1/2' direction='row' justify='start'>
          <Image src='/assets/mc_logo.png'
            size='thumb' />
          <Heading tag='h3' strong>
            MailChimp Dashboard
          </Heading>
        </Box>
        <Box basis='1/2' direction='row' justify='end'>
          <Menu
            label={`${first_name} ${last_name}`}
            icon={<DownIcon />}
            dropAlign={{'right': 'right'}}>
            <Anchor href='#'
              className='active'>
              Enter MailChimp API Key
            </Anchor>
            <Anchor href='#'>
              About
            </Anchor>
            <Anchor href='#'>
              Logout
            </Anchor>
          </Menu>
        </Box>
      </Header>
    )
  }
}
