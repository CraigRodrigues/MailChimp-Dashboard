import React from 'react'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Value from 'grommet/components/Value'
import DocumentUserIcon from 'grommet/components/icons/base/DocumentUser'

export default (props) => (
  <Box direction='column'
    align='center'
    alignContent='center'
    textAlign='center'
    full='horizontal'
    pad='small'>
    <Heading align='center'
      tag='h2'>
      Subscribers
    </Heading>
    <Value value={Number(props.numberOfSubscribers).toLocaleString()}
      icon={
        <DocumentUserIcon size='large'
          colorIndex='grey-1-a'
        />}
      responsive
      colorIndex='grey-1-a'
      size='large' />
  </Box>
)
