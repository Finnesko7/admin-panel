const {DataTypes} = require('sequelize')
const {sequelize} = require('../config/db')

const HrCandidatesCategories = sequelize.define('HrCandidatesCategories', {
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