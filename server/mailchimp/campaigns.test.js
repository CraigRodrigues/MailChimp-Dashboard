const mailchimp = require('./campaigns')

describe('Getting Data From All Campaigns', () => {
  test('It should receive an object', () => {
    return mailchimp.campaignReports()
      .then(data => {
        expect(typeof data).toBe('object')
      })
  })

  test('It should have only one property', () => {
    return mailchimp.campaignReports()
      .then(data => {
        expect(Object.keys(data)).toHaveLength(1)
      })
  })

  test('It should have a property called "campaigns"', () => {
    return mailchimp.campaignReports()
      .then(data => {
        expect(data.hasOwnProperty('campaigns')).toBe(true)
      })
  })

  test('Campaigns property should have a length of 34', () => {
    return mailchimp.campaignReports()
      .then(data => {
        expect(data.campaigns).toHaveLength(34)
      })
  })
})
