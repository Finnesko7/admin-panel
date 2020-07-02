import mongoose from 'mongoose';
import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('rest_atlanta__db', 'root', 'password', {
    host: 'localhost',
    port: 33060,
    dialect: 'mysql'
})

const mySqlConnect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (e) {
        console.error('Unable to connect to the database:', e);
    }
}


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
    mySqlConnect: mySqlConnect,
    sequelize: sequelize
}