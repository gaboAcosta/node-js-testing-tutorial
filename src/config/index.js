
const _ = require('lodash')

const env = process.env.NODE_ENV || 'development'

//Defaults will always have development values
const mainConfig = {
  db: {
    uri: 'mongodb://mongodb:27017/development'
  }
}

let extendedConfig = {}

if(env === 'test'){
  extendedConfig = {
    db: {
      uri: 'mongodb://mongodb:27017/test'
    }
  }
}

module.exports = _.merge(mainConfig, extendedConfig)
