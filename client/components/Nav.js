import React, { Component } from 'react'
import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Image from 'grommet/components/Image'
import Layer from 'grommet/components/Layer'
import AboutModal from './AboutModal'
import InputAPIModal from './InputAPIModal'
import ComingSoonModal from './ComingSoonModal'
import Box from 'grommet/components/Box'
import Menu from 'grommet/components/Menu'
import Anchor from 'grommet/components/Anchor'
import DownIcon from 'grommet/components/icons/base/Down'

export default class Nav extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: null,
      modal: null
    }

    this._activate = this._activate.bind(this)
    this._onClose = this._onClose.bind(this)
    this.resetLocalStorage = this.resetLocalStorage.bind(this)
  }

  _activate (event, option) {
    this.setState({
      active: true,
      modal: option
    })
  }

  _onClose (input) {
    this.setState({ active: false })

    if (input === 'refresh') {
      this.props.getNewData()
    }
  }

  selectModal (modal) {
    const modals = {
      about: <AboutModal />,
      comingSoon: <ComingSoonModal />,
      inputAPI: <InputAPIModal close={this._onClose} />
    }

    return modals[modal]
  }

  resetLocalStorage () {
    localStorage.clear()
    this.props.getNewData()
  }

  render () {
    let { first_name, last_name } = this.props.account

    let activeLayer = null

    if (this.state.active) {
      activeLayer = (
        <Layer onClose={this._onClose}
          closer
          align='center'>
          {this.selectModal(this.state.modal)}
        </Layer>
      )
    }

    return (
      <div>
        { activeLayer }
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
              <Anchor onClick={(e) => this._activate(e, 'inputAPI')}>
                {localStorage.api_token ? 'API Key Loaded' : 'Enter API Key'}
              </Anchor>
              <Anchor onClick={(e) => this._activate(e, 'about')}>
                About
              </Anchor>
              <Anchor onClick={this.resetLocalStorage}>
                Reset
              </Anchor>
            </Menu>
          </Box>
        </Header>
      </div>
    )
  }
}
