import React from 'react'
import { convertToPercentage } from '../utils'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Value from 'grommet/components/Value'
import GlobeIcon from 'grommet/components/icons/base/Globe'

const TOTAL_COUNTRIES = 196

export default ({countries}) => (
  <Box direction='column'
    align='center'
    alignContent='center'
    textAlign='center'
    full='horizontal'
    pad='small'>
    <Heading align='center'
      tag='h2'>
      Countries
    </Heading>
    <Value value={countries.length}
      label={`${convertToPercentage(countries.length / TOTAL_COUNTRIES)}% of the World`}
      icon={
        <GlobeIcon size='large'
          colorIndex='grey-1-a'
        />}
      responsive
      colorIndex='grey-1-a'
      size='large' />
  </Box>
)
