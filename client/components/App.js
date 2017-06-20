import React, { Component } from 'react'
import axios from 'axios'
import GrommetApp from 'grommet/components/App'
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
    this.state = {
      account: null,
      campaign: null,
      clients: null,
      listStats: null,
      locations: null
    }
  }

  componentWillMount () {
    // Grab info from API
    getAllData().then(response => {
      let [account, list, campaign] = response

      this.setState({
        account: account.data,
        campaign: campaign.data.campaigns,
        clients: list.data[1].clients,
        listStats: list.data[0].stats,
        locations: list.data[2].locations
      })

      console.log(this.state)
    })
  }

  render () {
    return (
      <div>
        <GrommetApp>
          <Nav />
          <Homepage account={this.state.account}
            campaign={this.state.campaign}
            clients={this.state.clients}
            listStats={this.state.listStats}
            locations={this.state.locations}
          />
          <Footer />
        </GrommetApp>
      </div>
    )
  }
}
