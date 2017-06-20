import React, { Component } from 'react'
import countdown from 'countdown'
import Heading from 'grommet/components/Heading'

export default class MembershipCounter extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentWillMount () {
    countdown(new Date(this.props.time), (timer) => {
      let countdown = timer.toString().replace(/, |( and )/g, ' : ')
      this.setState({ countdown: countdown })
    }, countdown.DEFAULTS)
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
