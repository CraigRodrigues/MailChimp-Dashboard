import React from 'react'
import Box from 'grommet/components/Box'
import Value from 'grommet/components/Value'
import Heading from 'grommet/components/Heading'
import Chart, { Base } from 'grommet/components/chart/Chart'
import Label from 'grommet/components/Label'
import Meter from 'grommet/components/Meter'

export default (props) => (
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
            value={12.5}
            active={false} />
          <Value value={'12.5%'}
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
            value={28.9}
            active={false} />
          <Value value={'28.9%'}
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
            value={2}
            active={false} />
          <Value value={'2.0%'}
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
            value={8.1}
            active={false} />
          <Value value={'8.1%'}
            active={false}
            size='small' />
        </Box>
      </Base>
    </Chart>
  </Box>
)
