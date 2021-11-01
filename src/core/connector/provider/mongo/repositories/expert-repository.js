'use strict'

const mongoose = require('mongoose');
const Expert = mongoose.model('Expert');

exports.get = async() => {
    //TODO: Map the db expert schema to the domain model.
    //TODO: Validation
    let res = await Expert.find({});
    return res;
}

exports.getById = async(id) => {
    //TODO: Map the db expert schema to the domain model.
    //TODO: Validation
    let res = await Expert.findById(id);
    return res;
}

exports.create = async(data) => {
    let expert = new Expert(data);
    await expert.save();
}