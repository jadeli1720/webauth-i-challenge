const express = require('express');
const bcrypt = require('bcryptjs')

const router = express.Router();

router.get('/', (req, res) => {
    res.send("It's working! It's Working!!")
})

//Testing bcrypt by hashing name

router.get('/hash', (req, res) => {
    const name = req.query.name;

    const hash = bcrypt.hashSync(name, 12)

    res.send(`the hash for ${name} id ${hash}`)
})

//User Registers- post to body and Hash the password

//User Logs In

// User Validation

module.exports = router