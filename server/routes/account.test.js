const request = require('supertest')
const app = require('../index')

describe('Account API Endpoint', () => {
  test('It should return 200 to GET /api/account', () => {
    return request(app).get('/api/account')
      .then(response => {
        expect(response.statusCode).toBe(200)
      })
  })
})
