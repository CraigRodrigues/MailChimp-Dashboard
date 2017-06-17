const mailchimp = require('./account')

test('It should receive an object', () => {
  let actual = mailchimp.accountDetails()
  expect(typeof actual).toBe('object')
})
