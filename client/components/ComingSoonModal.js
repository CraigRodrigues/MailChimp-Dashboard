import React from 'react'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'

export default () => (
  <Box responsive
    direction='column'
    align='center'
    alignContent='center'
    textAlign='center'
    full={false}
    pad='medium'>
    <Heading uppercase
      strong={false}
      truncate={false}
      align='center'
      margin='small'>
      Coming Soon
    </Heading>
    <Paragraph>
      Feature coming in the near future!
    </Paragraph>
  </Box>
)
