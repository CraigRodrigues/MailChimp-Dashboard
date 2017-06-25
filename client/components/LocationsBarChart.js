import React from 'react'
// import { Bar } from 'react-chartjs-2'
// import Box from 'grommet/components/Box'
import Chart, {Axis, Bar, Base, Layers, Marker, MarkerLabel, HotSpots} from 'grommet/components/chart/Chart'
import Value from 'grommet/components/Value'

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
  console.log(countries)

  return (
    <Chart full>
      <Axis count={5}
        labels={[{"index": 2, "label": "50"}, {"index": 4, "label": "100"}]}
        vertical={true}
        ticks={true} />
      <Chart vertical={true}>
        <MarkerLabel count={12}
          index={11}
          label={<Value value={50} />} />
        <Base height='medium'
          width='large' />
        <Layers>
          <Marker colorIndex='critical'
            value={90} />
          <Bar values={[45, 25, 60, 12, 35, , 10, 45, 60, 85, 70, 20]}
            colorIndex='graph-2'
            points={true}
            activeIndex={11} />
          <Marker colorIndex='graph-2'
            count={12}
            vertical={true}
            index={11} />
          <HotSpots count={12}
            max={100}
            activeIndex={11}
            onActive={() => console.log('blah')} />
        </Layers>
        <Axis count={12}
          labels={
            [
              {"index": 0, "label": "2012"},
              {"index": 1, "label": "2015"},
              {"index": 2, "label": "2012"},
              {"index": 3, "label": "2012"},
              {"index": 4, "label": "2012"},
              {"index": 5, "label": "2012"}
            ]
          }
          ticks={true} />
      </Chart>
      <MarkerLabel colorIndex='critical'
        value={90}
        label='90%'
        vertical={true} />
    </Chart>
  )
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
