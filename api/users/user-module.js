const db = require('../../database/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById,
};

//find and display user info ---> only if user is verified
function find() {
    return db('users')
        .select('id', 'username', 'password')
};

//Find user by argument ---> Used for login 
function findBy(filter) {
    return db('users').where(filter);
  }

//Add User ---> User Registration
function add(user) {
    return db('users')
        .insert(user, 'id')
        .then(ids => {
            const [id] = ids;
            return findById(id)
        })
};

//Used to add user and give them id
function findById(id) {
    return db('users')
        .where({ id })
        .first();
}
