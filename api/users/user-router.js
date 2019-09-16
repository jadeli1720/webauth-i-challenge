const express = require('express');
const bcrypt = require('bcryptjs')

const router = express.Router();

router.get('/', (req, res) => {
    res.send("It's working! It's Working!!")
})

//User Registers- post to body and Hash the password

//User Logs In

// User Validation

module.exports = router