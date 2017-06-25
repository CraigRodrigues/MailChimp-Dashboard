import React, { Component } from 'react'
import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Image from 'grommet/components/Image'
import Box from 'grommet/components/Box'
import Menu from 'grommet/components/Menu'
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
      <Header fixed
        size='medium'
        splash={false}
        flex >
        <a href='http://www.mailchimp.com'>
          <Image src='/assets/mc_logo.png' size='thumb' />
        </a>
        <Title>
          Dashboard
        </Title>
        <Box flex
          justify='end'
          direction='row'
          responsive={false}>
          <Menu responsive
            pad='small'
            label={`${first_name} ${last_name}`}
            icon={<DownIcon />}
            dropAlign={{'right': 'right'}}>
            <Anchor>
              Enter API Key
            </Anchor>
            <Anchor>
              About
            </Anchor>
            <Anchor>
              Logout
            </Anchor>
          </Menu>
        </Box>
      </Header>
    )
  }
}
