const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now //default will put the current time in automatically
    },

});

// To use schema, we need to convert UserSchema into a Model, we do so by passing it into mongoose.model(modelName, schema)
module.exports = User = mongoose.model('users', UserSchema);