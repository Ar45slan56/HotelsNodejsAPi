const mongoose = require('mongoose');

let mongourl = 'mongodb://localhost:27017/hotels';

mongoose.connect(mongourl, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB server...');
});
db.on('disconnected', () => {
    console.log('Mongodb Disconnected');
});

module.exports = db;
