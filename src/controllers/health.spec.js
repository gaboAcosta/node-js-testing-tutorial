
//Import the subject under test
const SUT = require('./health')
const sinon = require('sinon')
const assert = require('chai').assert

describe('health controller', function(){
  it('Should return a 200 response and an empty object in the response body', function(){
    const expectedResult = {}
    const expectedStatus = 200
    const requestMock = {}

    const responseStub = {
      status: sinon.stub(),
      json: sinon.spy()
    }

    responseStub.status.returns(responseStub)

    SUT.getHealth(requestMock, responseStub)

    assert.equal(responseStub.status.calledWith(expectedStatus), true)
    assert.equal(responseStub.json.calledWith(expectedResult), true)

  })
})