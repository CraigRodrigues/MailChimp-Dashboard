import React from 'react'
import { convertToPercentage } from '../utils'
import Box from 'grommet/components/Box'
import Value from 'grommet/components/Value'
import Heading from 'grommet/components/Heading'
import Chart, { Base } from 'grommet/components/chart/Chart'
import Label from 'grommet/components/Label'
import Meter from 'grommet/components/Meter'

export default ({myStats, industryRate}) => {
  const myOpenRate = convertToPercentage(myStats.open_rate)
  const myClickRate = convertToPercentage(myStats.click_rate)
  const industryOpenRate = convertToPercentage(industryRate.open_rate)
  const industryClickRate = convertToPercentage(industryRate.click_rate)

  return (
    <Box direction='column'
      align='center'
      alignContent='center'
      textAlign='center'
      full='horizontal'
      pad='small'>
      <Heading align='center'
        tag='h2'>
        Open and Click Rates
      </Heading>
      <Chart full={false}
        horizontalAlignWith='meter-1-id'>
        <Base vertical>
          <Box direction='row'
            align='center'
            pad={{'horizontal': 'small', 'between': 'small'}}>
            <Label margin='small'>
              Opens (Industry)
            </Label>
            <Meter id='meter-1-id'
              label={false}
              max={30}
              min={0}
              value={parseFloat(industryOpenRate)}
              active={false} />
            <Value value={`${industryOpenRate}%`}
              active={false}
              size='small' />
          </Box>
          <Box direction='row'
            align='center'
            pad={{'horizontal': 'small', 'between': 'small'}}>
            <Label margin='small'>
              Opens (GG Button)
            </Label>
            <Meter label={false}
              max={30}
              min={0}
              value={parseFloat(myOpenRate)}
              active={false} />
            <Value value={`${myOpenRate}%`}
              active={false}
              size='small' />
          </Box>
          <Box direction='row'
            align='center'
            pad={{'horizontal': 'small', 'between': 'small'}}>
            <Label margin='small'>
              Clicks (Industry)
            </Label>
            <Meter label={false}
              max={10}
              min={0}
              value={parseFloat(industryClickRate)}
              active={false} />
            <Value value={`${industryClickRate}%`}
              active={false}
              size='small' />
          </Box>
          <Box direction='row'
            align='center'
            pad={{'horizontal': 'small', 'between': 'small'}}>
            <Label margin='small'>
              Clicks (GG Button)
            </Label>
            <Meter label={false}
              max={10}
              min={0}
              value={parseFloat(myClickRate)}
              active={false} />
            <Value value={`${myClickRate}%`}
              active={false}
              size='small' />
          </Box>
        </Base>
      </Chart>
    </Box>
  )
}
