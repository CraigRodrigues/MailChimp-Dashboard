const request = require('supertest')
const app = require('../index')
const getAccountData = require('./account')

describe('Test the root path', () => {
  test('It should respond the GET method to /', () => {
    return request(app).get('/').then(response => {
      expect(response.statusCode).toBe(200)
    })
  })
})

describe('Route Tests', () => {
  test('It should return 200 to /api/account', () => {
    return request(app).get('/api/account')
      .then(response => {
        expect(response.statusCode).toBe(200)
      })
  })
})

// describe('Router Tests', () => {
//   it('Should return 200 on a GET request to /api/questions', done => {
//     request(app)
//       .get('/api/questions')
//       .end((err, res) => {
//         if (err) throw err
//         expect(res).toEqual(expect.anything())
//         done()
//       })
//   })
//   it('Should return 201 on a POST request to /api/questions', done => {
//     request(app)
//       .post('/api/questions')
//       .end((err, res) => {
//         if (err) throw err
//         expect(res).toEqual(expect.anything())
//         done()
//       })
//   })
//   it('Should return 201 on a POST request to /api/answers', done => {
//     request(app)
//       .post('/api/answers')
//       .end((err, res) => {
//         if (err) throw err
//         expect(res).toEqual(expect.anything())
//         done()
//       })
//   })
//   it('Should return 200 on a GET request to /api/users', done => {
//     request(app)
//       .get('/api/users')
//       .end((err, res) => {
//         if (err) throw err
//         expect(res).toEqual(expect.anything())
//         done()
//       })
//   })
//   it('Should return 201 on a POST request to /api/users', done => {
//     request(app)
//       .post('/api/users')
//       .end((err, res) => {
//         if (err) throw err
//         expect(res).toEqual(expect.anything())
//         done()
//       })
//   })
//   it('Should return 200 on a PUT request to /api/users', done => {
//     request(app)
//       .put('/api/users')
//       .end((err, res) => {
//         if (err) throw err
//         expect(res).toEqual(expect.anything())
//         done()
//       })
//   })
//   it('Should return 200 on a DELETE request to /api/users', done => {
//     request(app)
//       .delete('/api/users')
//       .end((err, res) => {
//         if (err) throw err
//         expect(res).toEqual(expect.anything())
//         done()
//       })
//   })
//   it('Should return 200 on a PUT request to /api/votes', done => {
//     request(app)
//       .put('/api/votes')
//       .end((err, res) => {
//         if (err) throw err
//         expect(res).toEqual(expect.anything())
//         done()
//       })
//   })
// })
