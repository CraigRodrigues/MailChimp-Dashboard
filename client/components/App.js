import React, { Component } from 'react'
import axios from 'axios'
import GrommetApp from 'grommet/components/App'
import Loading from './Loading'
import Nav from './Nav'
import Homepage from './Homepage'
import Footer from './Footer'

const getAccountData = (config) => {
  return axios.get('/api/account', config)
}

const getListData = (config) => {
  return axios.get('/api/lists', config)
}

const getCampaignData = (config) => {
  return axios.get('/api/campaigns', config)
}

const getAllData = () => {
  const key = localStorage.getItem('api_token') || null
  const config = {
    headers: {'Authorization': `Bearer ${key}`}
  }

  return Promise.all([getAccountData(config), getListData(config), getCampaignData(config)])
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
      <Loading />
    )
  }
}
