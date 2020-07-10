const {DataTypes} = require('sequelize')
const {sequelize} = require('../config/db')
const HrCandidates = require('./HrCandidates')

const HrCandidatesCategories = sequelize.define('category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    }

}, {
    tableName: 'hr_candidates_categories',
    timestamps:false
});

module.exports = HrCandidatesCategories;