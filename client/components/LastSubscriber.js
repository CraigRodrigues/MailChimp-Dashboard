import React, { Component } from 'react'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Value from 'grommet/components/Value'
import ClockIcon from 'grommet/components/icons/base/Clock'
import countdown from 'countdown'

export default class LastSubscriber extends Component {
  constructor (props) {
    super(props)
    this.state = {
      days: null,
      hours: null,
      minutes: null
    }
    this.loadInterval = false
  }

  componentWillMount () {
    this.loadInterval = countdown(new Date(this.props.listStats.last_sub_date), (timer) => {
      this.setState({
        days: `${timer.days} days`,
        hours: `${timer.hours} hours`,
        minutes: `${timer.minutes} minutes`
      })
    }, countdown.DAYS | countdown.HOURS | countdown.MINUTES)
  }

  componentWillUnmount () {
    this.loadInterval && clearInterval(this.loadInterval)
    this.loadInterval = false
  }

  render () {
    return (
      <Box
        flex
        direction='column'
        align='center'
        alignContent='center'
        alignSelf='center'
        textAlign='center'
        full={false}
        pad='small' >
        <Heading align='center'
          tag='h2'
          margin='small'>
          Last Subscriber
        </Heading>
        <Box flex direction='row' justify='center' align='center'>
          <Box pad={{horizontal: 'small', vertical: 'none'}}>
            <ClockIcon size='large' />
          </Box>
          <Box pad={{horizontal: 'small', vertical: 'none'}}>
            <Value value={this.state.days}
              align='start'
              responsive
              colorIndex='grey-1-a'
              size='medium' />
            <Value value={this.state.hours}
              align='start'
              responsive
              colorIndex='grey-1-a'
              size='medium' />
            <Value value={this.state.minutes}
              align='start'
              responsive
              colorIndex='grey-1-a'
              size='medium' />
          </Box>
        </Box>
      </Box>
    )
  }
}
