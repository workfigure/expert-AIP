'use strict';
var provider;

switch(global.GATEWAY_PROVIDER){
    case 'mongodb':
    provider = require('./provider/mongo/mongoProvider');
    default:
        //TODO: Log error message saying that there is no connector provider to access the backend data.
        break;
}

module.exports = {
    getUser: provider.getUser,
    getUserById: provider.getUserById,
    createUser: provider.createUser,
    authenticate: provider.authenticate,
    getExpert: provider.getExpert,
    getExpertById: provider.getExpertById,
    createExpert: provider.createExpert,
};