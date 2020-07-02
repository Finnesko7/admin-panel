const {Sequelize} = require('sequelize')
const  RealtyComplex = require('../models/RealtyComplex')

// use deleted_at: null because row created with laravel ORM
const getCountRc = () => {

    return RealtyComplex.findAll({
        attributes:[[Sequelize.fn('COUNT', Sequelize.col('id')), 'count']],
        where: {
            deleted_at: null
        }
    })
}

module.exports = {
    getCountRc: getCountRc
}