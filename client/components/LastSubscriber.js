import React, { Component } from 'react'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import countdown from 'countdown'

export default class LastSubscriber extends Component {
  constructor (props) {
    super(props)
    this.state = {
      days: null,
      hours: null,
      minutes: null
    }
  }

  componentWillMount () {
    countdown(new Date(this.props.listStats.last_sub_date), (timer) => {
      console.log(timer)
      this.setState({
        days: `${timer.days} days`,
        hours: `${timer.hours} hours`,
        minutes: `${timer.minutes} minutes`
      })
    }, countdown.DAYS | countdown.HOURS | countdown.MINUTES)
  }

  render () {
    return (
      <Box direction='column'
        align='center'
        alignContent='center'
        textAlign='center'
        full='horizontal'
        pad='small'>
        <Heading align='center'
          tag='h2'>
          Last Subscriber
        </Heading>
        <Heading align='center'
          tag='h3'>
          { this.state.days }
        </Heading>
        <Heading align='center'
          tag='h3'>
          { this.state.hours }
        </Heading>
        <Heading align='center'
          tag='h3'>
          { this.state.minutes }
        </Heading>
      </Box>
    )
  }
}
