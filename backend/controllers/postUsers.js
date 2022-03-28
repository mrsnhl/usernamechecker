const Users = require('../models/users');

function postUsers(request, response) {
    try{
        // response.json(request.body);
        const newUser = new Users(request.body);
        newUser.save().then(function() {
            console.log('Saved!');
        });
        let data = request.body;
        response.status(200).json({error: '', message: 'Successfully added!'})
    }
    catch(e) {
        response.status(500).json(e);
    }
}

module.exports = postUsers;