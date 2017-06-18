const request = require('supertest')
const app = require('../index')

describe('Test the root path', () => {
  test('It should respond the GET method to /', () => {
    return request(app).get('/')
      .then(response => {
        expect(response.statusCode).toBe(200)
      })
  })
})

describe('Routes and Response Status Codes', () => {
  test('It should return 200 to GET /api/account', () => {
    return request(app).get('/api/account')
      .then(response => {
        expect(response.statusCode).toBe(200)
      })
  })
  test('It should return 200 to GET /api/lists', () => {
    return request(app).get('/api/lists')
      .then(response => {
        expect(response.statusCode).toBe(200)
      })
  })
  test('It should return 201 to POST /api/lists', () => {
    return request(app).post('/api/lists')
      .then(response => {
        expect(response.statusCode).toBe(201)
      })
  })
  test('It should return 200 to GET /api/campaigns', () => {
    return request(app).get('/api/campaigns')
      .then(response => {
        expect(response.statusCode).toBe(200)
      })
  })
})

describe('Response Data', () => {
  test('It should return the correct account', () => {
    return request(app).get('/api/account')
      .then(response => {
        expect(response.body.first_name).toBe('GG')
      })
  })
  test('It should return campaign data', () => {
    return request(app).get('/api/campaigns')
      .then(response => {
        expect(response.body.hasOwnProperty('campaigns')).toBe(true)
      })
  })
  test('It should return list stats', () => {
    return request(app).get('/api/lists')
      .then(response => {
        expect(response.body[0].hasOwnProperty('stats')).toBe(true)
      })
  })
  test('It should return client data', () => {
    return request(app).get('/api/lists')
      .then(response => {
        expect(response.body[1].hasOwnProperty('clients')).toBe(true)
      })
  })
  test('It should return location data', () => {
    return request(app).get('/api/lists')
      .then(response => {
        expect(response.body[2].hasOwnProperty('locations')).toBe(true)
      })
  })
})
