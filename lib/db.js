const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost:27017/E-cart';

async function connect() {
    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true
        });
        console.log('Connected to E-cart database');
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    connect: connect
}