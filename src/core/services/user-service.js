'use strict';
/**
 * This the core of the USER business domain which means, this should have all the logic that is related to the User.
 * And also it should not depends on any framework or cloud platform.
 */

const connector = require('../connector/providerManager');

var getUser = async() => {
    //TODO: Validation and some domain logic here.
    await connector.getUser();
}

var getUserById = async(id) => {
    //TODO: Validation and some domain logic here.
    await connector.getUserById(id);
}

var createUser = async(data) => {
    //TODO: Validation and some domain logic here.
    await connector.createUser(data);
}

var authenticate = async(data) => {
    //TODO: Validation and some domain logic here.
    await connector.authenticate(data);
}

module.exports = {
    getUser: getUser,
    getUserById: getUserById,
    create: createUser,
    authenticate: authenticate
};