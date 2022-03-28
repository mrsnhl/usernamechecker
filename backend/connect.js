const mongoose = require('mongoose');
const connectionString = `mongodb+srv://mrsnhl:51pTmLdKPR1mnvOx@cluster0.lsfvi.mongodb.net/Cluster0?retryWrites=true&w=majority`;

function connect() {
    mongoose.connect(connectionString);
}

module.exports = connect;