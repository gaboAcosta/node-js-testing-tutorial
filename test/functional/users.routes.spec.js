
const app = require('../../src/setup/app')

const supertest = require('supertest')
const assert = require('chai').assert
const requestAgent = supertest(app)
const { clearCollection, bulkInsert } = require('./util/db')

describe('Users routes', function(){
  beforeEach(() => {
    return clearCollection('users')
  })
  it('Should return a 200 response with an array of users', function(done){
    const usersToInsert = [{
      name: 'Mr',
      lastName: 'Test',
      email: 'mr@tests.com'
    },{
      name: 'Mrs',
      lastName: 'Test',
      email: 'mrs@tests.com'
    }]

    bulkInsert('users', usersToInsert)
      .then(() => {
      const expectedUsers = usersToInsert.map((insertedUser) => {
        const parsedUser = Object.assign({}, insertedUser)
        parsedUser._id = insertedUser._id.toString()
        return parsedUser
      })
        requestAgent.get('/users')
          .then(response => {
            const { body } = response
            assert.equal(Array.isArray(body), true)
            assert.deepEqual(body, expectedUsers)
            done()
          }).catch(done)
      })


  })
})