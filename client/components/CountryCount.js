import React from 'react'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Value from 'grommet/components/Value'
import GlobeIcon from 'grommet/components/icons/base/Globe'

export default () => (
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
    <Value value={'42'}
      icon={
        <GlobeIcon size='large'
          colorIndex='grey-1-a'
        />}
      responsive
      colorIndex='grey-1-a'
      size='large' />
  </Box>
)
