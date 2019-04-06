'use strict';

var getUser = async() => {
    switch(global.GATEWAY_PROVIDER){
        case 'mongodb':
            //await mongodbProvider.getUser();
            return {};
        default:
        //Log
            break;
    }
}

module.exports = {
    getUser: getUser,
    getUserById: getUserById,
};