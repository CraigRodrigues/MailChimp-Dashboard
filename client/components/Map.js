import React from 'react'
import { countriesByContinent } from '../data'
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

export default ({ countries }) => {
  let allCountries = convertAllCountries(countries)
  let continents = filterCurrentCountriesByContinent(allCountries)

  console.log(allCountries)
  console.log(continents)

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
            'label': '0-5',
            'colorIndex': 'graph-1'
          },
          {
            'label': '6-10',
            'colorIndex': 'graph-2'
          },
          {
            'label': '11-25',
            'colorIndex': 'accent-1'
          },
          {
            'label': '26+',
            'colorIndex': 'brand'
          }
        ]} />
      </Box>
    </Box>
  )
}
