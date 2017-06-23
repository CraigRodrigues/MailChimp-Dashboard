import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const parseData = (list) => {
  return {
    labels: list.map(item => item.client),
    datasets: [{
      data: list.map(item => item.members),
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ]
    }]
  }
}

export default ({clients}) => {
  return (
    <div>
      <Doughnut data={parseData(clients)}
        width={350}
        height={400}
        options={{
          maintainAspectRatio: true,
          responsive: true
        }} />
    </div>
  )
}
