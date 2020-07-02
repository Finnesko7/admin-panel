import mongoose from 'mongoose';
import {Sequelize} from 'sequelize';

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
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