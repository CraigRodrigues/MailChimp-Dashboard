const mailchimp = require('./account')

test('It should receive an object', () => {
  return mailchimp.accountDetails()
    .then(data => {
      expect(typeof data).toBe('object')
    })
})

test('It should have seven properties', () => {
  return mailchimp.accountDetails()
    .then(data => {
      expect(Object.keys(data)).toHaveLength(7)
    })
})

test('It should contain all the properties needed', () => {
  let expected = [
    'first_name',
    'last_name',
    'avatar_url',
    'total_subscribers',
    'account_industry',
    'industry_stats',
    'member_since'
  ]

  return mailchimp.accountDetails()
    .then(data => {
      let actual = Object.keys(data)

      expected.forEach(prop => {
        expect(actual).toContain(prop)
      })
    })
})
