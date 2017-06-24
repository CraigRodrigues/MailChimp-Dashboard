import React, { Component } from 'react'
import axios from 'axios'
import GrommetApp from 'grommet/components/App'
import Headline from 'grommet/components/Headline'
import Box from 'grommet/components/Box'
import Spinning from 'grommet/components/icons/Spinning'
import Nav from './Nav'
import Homepage from './Homepage'
import Footer from './Footer'

const getAccountData = () => {
  return axios.get('/api/account')
}

const getListData = () => {
  return axios.get('/api/lists')
}

const getCampaignData = () => {
  return axios.get('/api/campaigns')
}

const getAllData = () => {
  return Promise.all([getAccountData(), getListData(), getCampaignData()])
}

export default class App extends Component {
  constructor () {
    super()
    this.state = null
  }

  componentWillMount () {
    // Grab info from API
    getAllData().then(response => {
      let [account, list, campaign] = response

      this.setState({
        account: account.data,
        campaigns: campaign.data.campaigns,
        clients: list.data[1].clients,
        listStats: list.data[0].stats,
        locations: list.data[2].locations
      })

      console.log(this.state)
    })
  }

  render () {
    if (this.state) {
      return (
        <GrommetApp>
          <Nav account={this.state.account} />
          <Homepage account={this.state.account}
            campaigns={this.state.campaigns}
            clients={this.state.clients}
            listStats={this.state.listStats}
            locations={this.state.locations}
          />
          <Footer />
        </GrommetApp>
      )
    }

    return (
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
  }
}
