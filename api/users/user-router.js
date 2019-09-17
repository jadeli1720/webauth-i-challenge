const express = require('express');
const bcrypt = require('bcryptjs');

const Users = require('./user-module');
const restricted = require('../../auth/restricted-middleware')

const router = express.Router();



//Testing bcrypt by hashing name

router.get('/hash', (req, res) => {
  const name = req.query.name;

  const hash = bcrypt.hashSync(name, 12)

  res.send(`the hash for ${name} id ${hash}`)
});

//User Registers- post to body and Hash the password
router.post('/register', (req, res) => {
  let { username, password } = req.body;

  const hash = bcrypt.hashSync(password, 12);

  Users.add({ username, password: hash })
    .then(saved => {
      res.status(201).json(saved)
    })
    .catch(err => {
      console.log("Registration", err)
      res.status(500).json({ message: 'Could not regirster this user' })
    });
});

//User LogIn
router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        req.session.user = user;
        res.status(200).json({ message: `Welcome ${user.username}!` });
      } else {
        res.status(401).json({ message: 'You Shall Not Pass!!!' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// User Validation
router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});


module.exports = router

/*
users & passwords:[
  {
	"username": "jade3000",
	"password": "password"
  },

  {
	"username": "David",
	"password": "davidPassword"
  },

  {
	"username": "Julse",
	"password": "bro"
  }
]
*/
