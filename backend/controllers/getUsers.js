function getUsers(request, response) {
    try {
        response.status(200).send('Inside GET Request');
    }
    catch {
        response.status(500).send('Some error happened in GET Request');
    }
}

module.exports = getUsers;