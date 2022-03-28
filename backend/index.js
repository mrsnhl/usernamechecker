const { getUsers, postUsers } = require('./controllers');

const connect = require('./connect');

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 4000;

app.get('/api/v1/users', getUsers);
app.post('/api/v1/users', postUsers);

app.listen(port, function() {
    try{
        connect();
        console.log('Server Started at port', port);
    }  
    catch (e) {
        console.log("Server couldn't be started", port);
    }
})