
const app = require('../../src/setup/app')

const supertest = require('supertest')
const assert = require('chai').assert
const requestAgent = supertest(app)

describe('Health check', function(){
  it('Should return a 200 response with an empty object', function(done){
    requestAgent.get('/health')
      .then(response => {
        assert.deepEqual({}, response.body)
        done()
      }).catch(done)
  })
})