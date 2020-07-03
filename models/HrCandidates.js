const {DataTypes} = require('sequelize')
const {sequelize} = require('../config/db')

const HrCandidates = sequelize.define('HrCandidates', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },

    name: {type: DataTypes.STRING},
    soname: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    candidate_category_id: {type: DataTypes.INTEGER},
    source: {type: DataTypes.BOOLEAN},
    comments: {type: DataTypes.STRING},

    updatedAt: {type: DataTypes.DATE, field: 'updated_at'},
    createdAt: {type: DataTypes.DATE, field: 'created_at'}
}, {
    tableName: 'hr_candidates',
    paranoid: false,
});

module.exports = HrCandidates;