
const User = require('../models/user')

function listUsers(req, res){
  User.find({}, 'name lastName email', function(err, users) {
    if (err) {
      console.error('Failed fetching user list', error)
      res.status(500).json({error: 'Internal Error'})
    } else {
      res.status(200).json(users)
    }
  })
}

function createUser(req, res) {
  const user = {
    name: req.body.name,
    lastName: req.body.lastName,
    email: req.body.email
  }

  const createdUser = new User(user)
  createdUser
    .save()
    .then((createdUser) => {
      res.status(200).json(createdUser.toJSON())
    })
    .catch((error) => {
      console.error('error creating user:', error)
      res.status(500).json({ error: 'Internal Error' })
    })
}

module.exports = {
  listUsers,
  createUser
}