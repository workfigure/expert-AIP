'use strict';
const repositoryUser = require('./repositories/user-repository');

var getUser = async() => {
    //TODO: Map the db user schema to the domain model.
    //TODO: Validation
    await repositoryUser.getUser();
}

var getUserById = async(id) => {
    //TODO: Map the db user schema to the domain model.
    //TODO: Validation
    await repositoryUser.getUserById();
}

var createUser = async(data) => {
    //TODO: Map the db user schema to the domain model.
    //TODO: Validation
    await repositoryUser.createUser(data);
}

var authenticate = async(data) => {
    //TODO: Map the db user schema to the domain model.
    //TODO: Validation
    await repositoryUser.authenticate(data);
}

module.exports = {
    getUser: getUser,
    getUserById: getUserById,
    createUser: createUser,
    authenticate: authenticate
};