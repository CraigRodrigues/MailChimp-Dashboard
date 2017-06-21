import React from 'react'
import { countriesByContinent } from '../data'
import _ from 'lodash'
import Heading from 'grommet/components/Heading'
import Legend from 'grommet/components/Legend'
import WorldMap from 'grommet/components/WorldMap'
import Box from 'grommet/components/Box'

const mapSeries = [
  {
    continent: 'NorthAmerica',
    label: 'North America',
    value: 40,
    colorIndex: 'brand',
    onClick: () => {}
  },
  {
    continent: 'SouthAmerica',
    label: 'South America',
    value: 30,
    colorIndex: 'accent-1',
    onClick: () => {}
  },
  {
    continent: 'Europe',
    label: 'Europe',
    value: 20,
    colorIndex: 'brand',
    onClick: () => {}
  },
  {
    continent: 'Africa',
    label: 'Africa',
    value: 10,
    colorIndex: 'graph-1',
    onClick: () => {}
  },
  {
    continent: 'Asia',
    label: 'Asia',
    value: 15,
    colorIndex: 'graph-2',
    onClick: () => {}
  },
  {
    continent: 'Australia',
    label: 'Australia',
    value: 10,
    colorIndex: 'accent-1',
    onClick: () => {}
  }
]

const convertAllCountries = (countries) => {
  return countries.map(item => item.country)
}

const filterCurrentCountriesByContinent = (countries) => {
  let results = {}
  for (let continent in countriesByContinent) {
    results[continent] = countriesByContinent[continent]
    results[continent] = _.intersection(results[continent], countries)
  }

  return results
}

export default ({ countries }) => {
  let allCountries = convertAllCountries(countries)
  let continents = filterCurrentCountriesByContinent(allCountries)

  console.log(allCountries, continents)

  return (
    <Box>
      <Heading align='center' tag='h2'>
        Subscriber World Map
      </Heading>
      <Box className='infographic-map'>
        <WorldMap series={mapSeries} />
      </Box>
      <Box align='center' pad={{vertical: 'small'}}>
        <Legend series={[
          {
            'label': '0',
            'colorIndex': 'graph-1'
          },
          {
            'label': '1-25',
            'colorIndex': 'graph-2'
          },
          {
            'label': '26-50',
            'colorIndex': 'accent-1'
          },
          {
            'label': '50+',
            'colorIndex': 'brand'
          }
        ]} />
      </Box>
    </Box>
  )
}
