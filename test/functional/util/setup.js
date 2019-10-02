

const { clearCollections } = require('./db')

//This will be our main setup, we should wipe the test db clean
before(function(done){
  clearCollections()
    .then(() => done())
    .catch(done)
})