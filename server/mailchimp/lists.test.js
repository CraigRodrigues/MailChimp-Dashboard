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
        expect(Object.keys(data.stats).toHaveLength(16))
      })
  })

})

describe('List User Agent/Client Data', () => {

})

describe('Getting Location Data', () => {

})

describe('Subscribing Email to a List', () => {

})
