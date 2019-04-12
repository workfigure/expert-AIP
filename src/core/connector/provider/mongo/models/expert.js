'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const skillSchema = require('./skill');

const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        index: true,
        unique: true
    },
    Bio: {
        type: String
    },
    URL: {
        type: String
    },
    Company: {
        type: String
    },
    Location: {
        type: String
    },
    Skills: [skillSchema],
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    created: {
        type: Date,
        required: true,
        default: Date.now
    },
});

module.exports = mongoose.model('Expert', schema);