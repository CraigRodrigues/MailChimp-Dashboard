import React from 'react'
import GrommetApp from 'grommet/components/App'
import Box from 'grommet/components/Box'
import Image from 'grommet/components/Image'
import Spinning from 'grommet/components/icons/Spinning'

export default () => (
  <GrommetApp>
    <Box align='center'
      alignContent='center'
      justify='center'
      alignSelf='center'
      textAlign='center'
      full>
      <Image src='/assets/mc_logo.png' size='thumb' />
      <Spinning size='large' />
    </Box>
  </GrommetApp>
)
