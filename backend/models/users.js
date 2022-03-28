const mongoose = require('mongoose');

const Users = mongoose.model('Users', 
{
    name: String,
    username: String
});

module.exports = Users;
