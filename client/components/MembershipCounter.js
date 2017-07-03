import React, { Component } from 'react'
import countdown from 'countdown'
import Heading from 'grommet/components/Heading'

export default class MembershipCounter extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.loadInterval = false
  }

  componentWillMount () {
    this.loadInterval = countdown(new Date(this.props.time), (timer) => {
      let countdown = timer.toString().replace(/, |( and )/g, ' : ')
      this.setState({ countdown: countdown })
    }, countdown.DEFAULTS)
  }

  componentWillUnmount () {
    this.loadInterval && clearInterval(this.loadInterval)
    this.loadInterval = false
  }

  render () {
    return (
      <Heading strong
        uppercase
        truncate={false}
        align='center'
        tag='h5'>
        {this.state.countdown}
      </Heading>
    )
  }
}
