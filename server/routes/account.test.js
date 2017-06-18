const request = require('supertest')
const app = require('../index')
const getAccountData = require('./account')

describe('Test the root path', () => {
  test('It should respond the GET method to /', () => {
    return request(app).get('/')
      .then(response => {
        expect(response.statusCode).toBe(200)
      })
  })
})

describe('Route Tests', () => {
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

describe('Account /api/account', () => {
  test('It should return account data', () => {
    return request(app).get('/api/account')
      .then(data => {
        expect(typeof data).toBe('object')
      })
  })
})
