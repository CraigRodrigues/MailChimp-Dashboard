import React, { Component } from 'react'
import Chart,
  {Axis, Bar, Base, Grid, Layers, Marker, MarkerLabel, HotSpots}
  from 'grommet/components/chart/Chart'
import Value from 'grommet/components/Value'

const parseData = countries => {
  return {
    labels: countries.map(item => item.country),
    datasets: [
      {
        label: 'Percent %',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1.5,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: countries.map(item => item.percent)
      }
    ]
  }
}

export default class LocationsBarChart extends Component {
  constructor (props) {
    super(props)

    let data = parseData(this.props.countries)
    this.names = data.labels
    this.numbers = data.datasets[0].data

    this.state = {
      activeIndex: 0,
      activeLabel: `${this.names[0]} (${this.numbers[0]}%)`
    }

    this.handleActive = this.handleActive.bind(this)
  }

  handleActive (index) {
    if (index !== undefined) {
      this.setState({activeIndex: index, activeLabel: `${this.names[index]} (${this.numbers[index]}%)`})
    }
  }

  render () {
    return (
      <Chart full>
        <Axis count={4}
          labels={[
            {'index': 0, 'label': '5'},
            {'index': 1, 'label': '15'},
            {'index': 2, 'label': '25'},
            {'index': 3, 'label': '35'}
          ]}
          vertical />
        <Chart vertical>
          <MarkerLabel count={10}
            index={this.state.activeIndex}
            label={<Value value={this.state.activeLabel} />} />
          <Base height='medium'
            width='large' />
          <Layers>
            <Grid rows={5} columns={5} />
            <Bar values={this.numbers}
              colorIndex='brand'
              max={30}
              points={false}
              activeIndex={this.state.activeIndex} />
            <Marker colorIndex='brand'
              count={10}
              vertical
              index={this.state.activeIndex} />
            <HotSpots count={10}
              activeIndex={this.state.activeIndex}
              onActive={(index) => this.handleActive(index)} />
          </Layers>
        </Chart>
      </Chart>
    )
  }
}
