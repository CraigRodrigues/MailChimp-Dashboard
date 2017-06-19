import React from 'react'
import Meter from 'grommet/components/Meter'
import Box from 'grommet/components/Box'
import Value from 'grommet/components/Value'

export default () => (
  <div>
    <p>Hello, World!</p>
    <Box>
      <Value value={40}
        units='GB'
        align='start' />
      <Meter value={40} />
    </Box>
  </div>
)
