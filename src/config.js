global.PROJECT_NAME = 'REST API';
global.PROJECT_URL = 'http://localhost:3000';
global.PROJECT_VERSION = '0.0.1';
global.SALT_KEY = 'e8ccfba6-f087-4697-a567-2ee41e6b6697'; //important
global.GATEWAY_PROVIDER = 'mongodb';

module.exports = {
    MODE: 'development', // production or development
    MONGODB_CONNECTION_STRING: 'mongodb://luis:luis@ds058048.mlab.com:58048/nodestr' //mongodb connection string (required)
};