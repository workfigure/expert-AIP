'use strict';
const repositoryUser = require('./repositories/user-repository');
const repositoryExpert = require('./repositories/expert-repository');

module.exports = {
    getUser: repositoryUser.getUser,
    getUserById: repositoryUser.getUserById,
    createUser: repositoryUser.createUser,
    authenticate:  repositoryUser.authenticate,
    getUser: repositoryExpert.getExpert,
    getUserById: repositoryExpert.getExpertById,
    createUser: repositoryExpert.createExpert,
};