import React from 'react'
import { convertToPercentage } from '../utils'
import Animate from 'grommet/components/Animate'
import Box from 'grommet/components/Box'
import Value from 'grommet/components/Value'
import Heading from 'grommet/components/Heading'
import Chart, { Base } from 'grommet/components/chart/Chart'
import CursorIcon from 'grommet/components/icons/base/Cursor'
import Label from 'grommet/components/Label'
import Meter from 'grommet/components/Meter'

export default ({myStats, industryRate}) => {
  console.log(myStats)
  console.log(industryRate)
  const myOpenRate = myStats ? convertToPercentage(myStats.open_rate) : 0
  const myClickRate = myStats ? convertToPercentage(myStats.click_rate) : 0
  const industryOpenRate = industryRate ? convertToPercentage(industryRate.open_rate) : 0
  const industryClickRate = industryRate ? convertToPercentage(industryRate.click_rate) : 0

  return (
    <Animate enter={{'animation': 'slide-up', 'duration': 1000, 'delay': 0}}>
      <Box direction='column'
        align='center'
        alignContent='center'
        textAlign='center'
        pad='small'>
        <Heading align='center'
          tag='h2'>
          <CursorIcon />
          {' '}Open & Click Rates
        </Heading>
        <Chart full={false}
          horizontalAlignWith='meter-1-id'>
          <Base vertical>
            <Box direction='row'
              align='center'
              pad={{'horizontal': 'small', 'between': 'small'}}>
              <Label margin='small'>
                Opens (Ind)
              </Label>
              <Meter id='meter-1-id'
                colorIndex='brand'
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
                Opens (You)
              </Label>
              <Meter label={false}
                colorIndex='brand'
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
                Clicks (Ind)
              </Label>
              <Meter label={false}
                colorIndex='brand'
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
                Clicks (You)
              </Label>
              <Meter label={false}
                colorIndex='brand'
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
    </Animate>
  )
}
