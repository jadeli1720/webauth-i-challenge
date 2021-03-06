
module.exports = function restricted(req, res, next) {
    if(req.session && req.session.user) {
        //If user is found, move to the next action
        next();
    } else {
        res.status(401).json({ message: 'You shall not pass!' })
    }
}

//9/16 Code using bcrypt for user restriction and password validation:
/*
const bcrypt = require('bcryptjs');
const Users = require('../api/users/user-module');

module.exports = function restricted(req, res, next) {
    let { username, password } = req.headers;
    
    if (username && password) {
        Users.findBy({ username })
            .first()
            .then(user => {
                if (user && bcrypt.compareSync(password, user.password)) {
                    next();
                } else {
                    res.status(401).json({ message: 'Invalid Credentials' });
                }
            })
            .catch(error => {
                res.status(500).json({ message: 'Unexpected error' });
            });
    } else {
        res.status(400).json({ message: 'Please provide valid credentials' })
    }
}

 */