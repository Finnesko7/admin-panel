import mongoose from 'mongoose';

const knex = require('knex');
const config = require('../knexfile');
const mySqlConnect = knex(config.development);


const mongoConnect = async () => {
    if (mongoose.connections[0].readyState) return;
    // Using new database connection
    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
    });
};

module.exports = {
    mongoConnect: mongoConnect,
    mySqlConnect: mySqlConnect
}