import React, { Component } from 'react'
import { countriesByContinent } from '../data'
import MapModal from './MapModal'
import Heading from 'grommet/components/Heading'
import Layer from 'grommet/components/Layer'
import Legend from 'grommet/components/Legend'
import MapLocationIcon from 'grommet/components/icons/base/MapLocation'
import WorldMap from 'grommet/components/WorldMap'
import Box from 'grommet/components/Box'

const colors = [
  {
    threshold: 0,
    colorIndex: 'graph-1'
  },
  {
    threshold: 51,
    colorIndex: 'graph-2'
  },
  {
    threshold: 251,
    colorIndex: 'accent-1'
  },
  {
    threshold: 999,
    colorIndex: 'accent-2'
  },
  {
    threshold: 1999,
    colorIndex: 'brand'
  }
]

const findColor = (value) => {
  for (var i = colors.length - 1; i >= 0; i--) {
    if (value >= colors[i].threshold) {
      return colors[i].colorIndex
    }
  }
}

const convertAllCountries = (countries) => {
  return countries.map(item => {
    return {
      name: item.country,
      subscribers: item.total
    }
  })
}

const filterCurrentCountriesByContinent = (countries) => {
  let results = {}
  for (let continent in countriesByContinent) {
    // If our country name matches in a list of continents then push object
    let temp = []
    countries.forEach(country => {
      if (countriesByContinent[continent].includes(country.name)) {
        temp.push(country)
      }
    })

    // Move our temporary values into our results object
    results[continent] = temp
  }

  return results
}

const numberOfCountriesPerContinent = (list) => {
  let results = {}

  for (let continent in list) {
    results[continent] = list[continent].length
  }

  return results
}

const numberOfSubscribersPerContinent = (list) => {
  let results = {}

  for (let continent in list) {
    results[continent] = list[continent].map(item => item.subscribers).reduce((a, b) => a + b, 0)
  }

  return results
}

export default class Map extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: undefined,
      continentSelected: undefined
    }

    this._activate = this._activate.bind(this)
    this._onClose = this._onClose.bind(this)
  }

  _activate (continent, prop = continent) {
    this.setState({
      active: true,
      continentSelected: continent,
      continentProperty: prop
    })
  }

  _onClose () {
    this.setState({ active: false })
  }

  createMapSeries (subscribers) {
    return [
      {
        continent: 'NorthAmerica',
        label: 'North America',
        value: subscribers.NorthAmerica,
        colorIndex: findColor(subscribers.NorthAmerica),
        onClick: () => { this._activate('North America', 'NorthAmerica') }
      },
      {
        continent: 'SouthAmerica',
        label: 'South America',
        value: subscribers.SouthAmerica,
        colorIndex: findColor(subscribers.SouthAmerica),
        onClick: () => { this._activate('South America', 'SouthAmerica') }
      },
      {
        continent: 'Europe',
        label: 'Europe',
        value: subscribers.Europe,
        colorIndex: findColor(subscribers.Europe),
        onClick: () => { this._activate('Europe') }
      },
      {
        continent: 'Africa',
        label: 'Africa',
        value: subscribers.Africa,
        colorIndex: findColor(subscribers.Africa),
        onClick: () => { this._activate('Africa') }
      },
      {
        continent: 'Asia',
        label: 'Asia',
        value: subscribers.Asia,
        colorIndex: findColor(subscribers.Asia),
        onClick: () => { this._activate('Asia') }
      },
      {
        continent: 'Australia',
        label: 'Australia',
        value: subscribers.Oceania,
        colorIndex: findColor(subscribers.Oceania),
        onClick: () => { this._activate('Australia', 'Oceania') }
      }
    ]
  }

  render () {
    let { countries } = this.props
    let allCountries = convertAllCountries(countries)
    let continents = filterCurrentCountriesByContinent(allCountries)

    const numberOfCountries = numberOfCountriesPerContinent(continents)
    const numberOfSubscribers = numberOfSubscribersPerContinent(continents)

    let activeLayer = null

    if (this.state.active) {
      activeLayer = (
        <Layer onClose={this._onClose}
          closer
          align='center'>
          <MapModal continent={this.state.continentSelected}
            count={numberOfCountries[this.state.continentProperty]} />
        </Layer>
      )
    }

    return (
      <Box>
        { activeLayer }
        <Heading align='center' tag='h2'>
          <MapLocationIcon />
          {' '}Subscriber Map
        </Heading>
        <Box className='infographic-map'>
          <WorldMap series={this.createMapSeries(numberOfSubscribers)} />
        </Box>
        <Box align='center' pad={{vertical: 'small'}}>
          <Legend series={[
            {
              'label': '0-50',
              'colorIndex': 'graph-1'
            },
            {
              'label': '51-249',
              'colorIndex': 'graph-2'
            },
            {
              'label': '250-999',
              'colorIndex': 'accent-1'
            },
            {
              'label': '1000-1999',
              'colorIndex': 'accent-2'
            },
            {
              'label': '2000+',
              'colorIndex': 'brand'
            }
          ]} />
        </Box>
      </Box>
    )
  }
}
