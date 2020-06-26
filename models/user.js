const {Schema, model} = require('mongoose')

const userSchema = new Schema({
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        active: {
            type: Boolean,
            required: true
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

global.userSchema = global.userSchema || model('User', userSchema);
module.exports = global.userSchema;