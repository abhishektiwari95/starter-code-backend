const mongoose = require('mongoose');
const colors = require('colors');

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT
    ).then(() => {
        console.log('Connected to DB'.red.bold);
    }).catch(err => console.log(err));
}


module.exports = connectToDb;