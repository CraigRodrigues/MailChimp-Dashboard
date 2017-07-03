import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2'

export default class ClientsDoughnutChart extends Component {
  constructor () {
    super()
    this.state = {}
    this.colors = [ '#FF8A65', '#66BB6A', '#90CAF9', '#78909C', '#EC407A', '#BCAAA4', '#CE93D8', '#EF5350', '#FFF176', '#212121' ]
  }

  parseData (list) {
    let total = list.reduce((x, y) => x + y.members, 0)

    return {
      labels: list.map(item => item.client),
      datasets: [{
        data: list.map(item => ((item.members / total) * 100).toFixed(2)),
        backgroundColor: this.colors.splice(0, list.length),
        hoverBackgroundColor: this.colors.splice(0, list.length)
      }]
    }
  }

  render () {
    let { clients } = this.props
    return (
      <div>
        <Doughnut data={this.parseData(clients)}
          width={350}
          height={500}
          options={{
            maintainAspectRatio: true,
            responsive: true
          }} />
      </div>
    )
  }
}
