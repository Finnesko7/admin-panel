const {DataTypes, Model} = require('sequelize')
const {sequelize} = require('../config/db')

const RealtyComplex = sequelize.define('RealtyComplex', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name_ru: {
        type: DataTypes.STRING
    },
    address_ru: {
        type: DataTypes.STRING
    },
    name_ua: {
        type: DataTypes.STRING
    },
    address_ua: {
        type: DataTypes.STRING
    },
    short_description_ua: {
        type: DataTypes.STRING
    },
    short_description_ru: {
        type: DataTypes.STRING
    },

    createdAt: {type: DataTypes.DATE, field: 'created_at'},
    updatedAt: {type: DataTypes.DATE, field: 'updated_at'},
    deleteAt: {type: DataTypes.DATE, field: 'deleted_at'}
}, {
    tableName: 'rc',
    paranoid: false
});

module.exports = RealtyComplex;