import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const colors = [
  '#FF8A65', '#66BB6A', '#90CAF9', '#78909C', '#EC407A', '#BCAAA4', '#CE93D8', '#EF5350', '#FFF176', '#212121'
]

const parseData = (list) => {
  let total = list.reduce((x, y) => x + y.members, 0)

  return {
    labels: list.map(item => item.client),
    datasets: [{
      data: list.map(item => ((item.members / total) * 100).toFixed(2)),
      backgroundColor: colors.splice(0, list.length),
      hoverBackgroundColor: colors.splice(0, list.length)
    }]
  }
}

export default ({clients}) => {
  return (
    <div>
      <Doughnut data={parseData(clients)}
        width={350}
        height={500}
        options={{
          maintainAspectRatio: true,
          responsive: true
        }} />
    </div>
  )
}
