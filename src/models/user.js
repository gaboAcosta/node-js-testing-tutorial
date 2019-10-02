const mongoose = require('mongoose');

var schema = new mongoose.Schema({
  name: String,
  lastName: String,
  email: {
    type: String,
    required: true,
    unique: true
  }
});
var User = mongoose.model('User', schema);

module.exports = User
