
const mongoose = require('mongoose');
const config = require('../config')

const { db } = config

mongoose.connect(db.uri, {useNewUrlParser: true});
