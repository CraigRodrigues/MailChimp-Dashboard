import React from 'react'
import GrommetApp from 'grommet/components/App'
import Box from 'grommet/components/Box'
import Spinning from 'grommet/components/icons/Spinning'

export default () => (
  <GrommetApp>
    <Box align='center'
      alignContent='center'
      justify='center'
      alignSelf='center'
      textAlign='center'
      full>
      <Spinning size='large' />
    </Box>
  </GrommetApp>
)
