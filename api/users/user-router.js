const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send("It's working! It's Working!!")
})

module.exports = router