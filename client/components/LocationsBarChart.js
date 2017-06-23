import React from 'react'
import { Bar } from 'react-chartjs-2'
import Box from 'grommet/components/Box'

const parseData = (countries) => {
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

export default ({countries}) => {
  return (
    <div>
      <Bar
        data={parseData(countries)}
        width={500}
        height={350}
        options={{
          maintainAspectRatio: true,
          responsive: true
        }}
      />
    </div>
  )
}
