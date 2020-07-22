const {DataTypes} = require('sequelize')
const {sequelize} = require('../config/db')

const RealtyComplexDeveloper = sequelize.define('rcDeveloper', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name_ru: {
        type: DataTypes.STRING
    },
    name_ua: {
        type: DataTypes.STRING
    },
    image_id: {
        type: DataTypes.INTEGER
    },
    site: {
        type: DataTypes.STRING
    },
    alias: {
        type: DataTypes.STRING
    },
    is_active: {
        type: DataTypes.BOOLEAN
    },

    createdAt: {type: DataTypes.DATE, field: 'created_at'},
    updatedAt: {type: DataTypes.DATE, field: 'updated_at'},
    deleteAt: {type: DataTypes.DATE, field: 'deleted_at'}
}, {
    tableName: 'rc_developer'
});

module.exports = RealtyComplexDeveloper;