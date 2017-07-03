import React from 'react'
import Animate from 'grommet/components/Animate'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import PersonalComputerIcon from 'grommet/components/icons/base/PersonalComputer'
import ClientsDoughnutChart from './ClientsDoughnutChart'

export default ({clients}) => (
  <Animate enter={{'animation': 'slide-up', 'duration': 1000, 'delay': 0}}>
    <Box direction='column'
      align='center'
      alignContent='center'
      alignSelf='center'
      textAlign='center'
      full={false}
      basis='1/2'
      pad='small'>
      <Heading align='center' tag='h2'>
        <PersonalComputerIcon />
        {' '}
        Email Clients
      </Heading>
      <ClientsDoughnutChart clients={clients} />
    </Box>
  </Animate>
)
