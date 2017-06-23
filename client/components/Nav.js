import React, { Component } from 'react'
import Header from 'grommet/components/Header'
import Heading from 'grommet/components/Heading'
import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'
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
        pad='small'
        alignContent='center'
        full='horizontal'
        size='small'
        colorIndex='light-2'
        responsive >
        <Box direction='row'>
          <Image src='/assets/mc_logo.png'
            size='thumb' />
          <Box pad='small' justify='center' align='center' alignSelf='center'>
            <Heading tag='h3'>
              MailChimp Dashboard
            </Heading>
          </Box>
        </Box>
        <Box flex
          justify='end'
          direction='row'
          pad='small'>
          <Image src='https://grommet.github.io/img/carousel-1.png'
            size='thumb' />
          <Box pad={{horizontal: 'small'}}>
            <Paragraph align='center' margin='small' size='large'>
              {`${first_name} ${last_name}`}
            </Paragraph>
          </Box>
          <Menu icon={<DownIcon />}
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
