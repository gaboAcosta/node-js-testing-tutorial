
//This will connect the db
const mongoose = require('mongoose')
require('../../../src/setup/db')

function getCollectionByName (collectionName) {
  const { collections } = mongoose.connection
  const collection = collections[collectionName]
  return collection
}

function clearCollection (collectionName) {
  const collection = getCollectionByName(collectionName)
  return new Promise((resolve, reject) => {
    collection.drop((function(error){
      if(error) reject(error)
      resolve()
    }))
  })
}

function clearCollections() {
  const { collections } = mongoose.connection
  const clearPromises = []
  Object.keys(collections).forEach((collection) => {
    clearPromises.push(clearCollection(collection))
  })

  return Promise.all(clearPromises)
}

function bulkInsert (collectionName, documents) {
  const collection = getCollectionByName(collectionName)
  return new Promise((resolve, reject) => {
    collection.insertMany(documents, (function(error, result){
      if(error) reject(error)
      resolve(result.ops)
    }))
  })
}

module.exports = {
  clearCollections,
  clearCollection,
  bulkInsert,
}