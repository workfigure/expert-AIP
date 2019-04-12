'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    area: [this],
    rate: {
        type: String,
        required: true,
        enum: ['Novice', 'Beginner', 'Junior', 'Senior', 'Expert'],
        default: 'Novice'
    },
    created: {
        type: Date,
        required: true,
        default: Date.now
    },
});

module.exports = mongoose.model('Skill', schema);