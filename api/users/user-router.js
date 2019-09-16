const express = require('express');
const bcrypt = require('bcryptjs');
const Users = require('./user-module');

const router = express.Router();

router.get('/', (req, res) => {
    res.send("It's working! It's Working!!")
});

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


//User Logs In

// User Validation

module.exports = router