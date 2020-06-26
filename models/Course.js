const {Schema, model} = require('mongoose')

const course = new Schema({
        title: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        image: {
            type: String,
        }
    },
    {
        toObject: {
            virtuals: true,
        },
        toJSON: {
            virtuals: true,
        }
    })

module.exports = model('Course', course);