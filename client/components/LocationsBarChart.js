import React, { Component } from 'react'
// import { Bar } from 'react-chartjs-2'
// import Box from 'grommet/components/Box'
import Chart, {Axis, Bar, Base, Grid, Layers, Marker, MarkerLabel, HotSpots} from 'grommet/components/chart/Chart'
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
      activeLabel: 'USA'
    }

    this.handleActive = this.handleActive.bind(this)
  }

  handleActive (index) {
    if (index !== undefined) {
      this.setState({activeIndex: index, activeLabel: this.names[index]})
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
              colorIndex='graph-2'
              max={30}
              points
              activeIndex={this.state.activeIndex} />
            <Marker colorIndex='graph-2'
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

// export default ({countries}) => {
//   return (
//     <Box flex='shrink'>
//       <Bar
//         data={parseData(countries)}
//         width={650}
//         height={350}
//         options={{
//           maintainAspectRatio: true,
//           responsive: true,
//           scales: {
//             xAxes: [{
//               stacked: false,
//               beginAtZero: true,
//               scaleLabel: {
//                 labelString: 'Country'
//               },
//               ticks: {
//                 stepSize: 1,
//                 min: 0,
//                 autoSkip: false
//               }
//             }]
//           }
//         }}
//       />
//     </Box>
//   )
// }
