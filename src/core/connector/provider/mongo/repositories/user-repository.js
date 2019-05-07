'use strict'

const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.get = async() => {
    //TODO: Map the db user schema to the domain model.
    //TODO: Validation
    let res = await User.find({}, 'name email active roles created');
    return res;
}

exports.getById = async(id) => {
    //TODO: Map the db user schema to the domain model.
    //TODO: Validation
    let res = await User.findById(id, 'name email active roles created');
    return res;
}

exports.create = async(data) => {
    //TODO: Map the db user schema to the domain model.
    //TODO: Validation
    let user = new User(data);
    await user.save();
}

exports.authenticate = async(data) => {
    //TODO: Map the db user schema to the domain model.
    //TODO: Validation
    let res = await User.findOne({
        email: data.email,
        password: data.password,
        active: true
    });
    return res;
}