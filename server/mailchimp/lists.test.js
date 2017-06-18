const mailchimp = require('./lists')

describe('Basic List Stats', () => {

  test('It should return an object', () => {
    return mailchimp.listStats()
      .then(data => {
        expect(typeof data).toBe('object')
      })
  })
  test('It should have only one property', () => {
    return mailchimp.listStats()
      .then(data => {
        expect(Object.keys(data)).toHaveLength(1)
      })
  })
  test('It should have a property called "stats"', () => {
    return mailchimp.listStats()
      .then(data => {
        expect(data.hasOwnProperty('stats')).toBe(true)
      })
  })
  test('Stats object should have 16 properties', () => {
    return mailchimp.listStats()
      .then(data => {
        expect(Object.keys(data.stats)).toHaveLength(16)
      })
  })

})

describe('List User Agent/Client Data', () => {

  test('It should return an object', () => {
    return mailchimp.clientData()
      .then(data => {
        expect(typeof data).toBe('object')
      })
  })
  test('It should have only one property', () => {
    return mailchimp.clientData()
      .then(data => {
        expect(Object.keys(data)).toHaveLength(1)
      })
  })
  test('It should have a property called "clients"', () => {
    return mailchimp.clientData()
      .then(data => {
        expect(data.hasOwnProperty('clients')).toBe(true)
      })
  })
  test('Clients array should have 10 clients', () => {
    return mailchimp.clientData()
      .then(data => {
        expect(data.clients).toHaveLength(10)
      })
  })
  test('It should contain all of the listed browsers/agents', () => {
    let expected = ['Gmail', 'iPhone', 'Hotmail', 'Safari mobile', 'Chrome Mobile', 'Apple Mail', 'Android', 'Android browser', 'Yahoo', 'Thunderbird']

    return mailchimp.clientData()
      .then(data => {
        let actual = data.clients.map(x => x.client)

        expected.forEach(client => {
          expect(actual).toContain(client)
        })
      })
  })

})

describe('Getting Location Data', () => {

})

describe('Subscribing Email to a List', () => {

})
