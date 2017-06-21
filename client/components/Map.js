import React from 'react'
import { countriesByContinent } from '../data'
import Heading from 'grommet/components/Heading'
import Legend from 'grommet/components/Legend'
import WorldMap from 'grommet/components/WorldMap'
import Box from 'grommet/components/Box'

const colors = [
  {
    threshold: 50,
    colorIndex: 'graph-1'
  },
  {
    threshold: 249,
    colorIndex: 'graph-2'
  },
  {
    threshold: 999,
    colorIndex: 'accent-1'
  },
  {
    threshold: 1999,
    colorIndex: 'accent-2'
  },
  {
    threshold: 2000,
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

export default ({ countries }) => {
  let allCountries = convertAllCountries(countries)
  let continents = filterCurrentCountriesByContinent(allCountries)

  console.log(allCountries)
  console.log(continents)

  const numberOfCountries = numberOfCountriesPerContinent(continents)
  const numberOfSubscribers = numberOfSubscribersPerContinent(continents)

  console.log(numberOfCountries)
  console.log(numberOfSubscribers)

  return (
    <Box>
      <Heading align='center' tag='h2'>
        Subscriber World Map
      </Heading>
      <Box className='infographic-map'>
        <WorldMap series={mapSeries} />
      </Box>
      <Box align='center' pad={{vertical: 'medium'}}>
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
