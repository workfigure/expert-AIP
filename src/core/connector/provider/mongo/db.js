'use strict';

const config = require('../../../../config');

var init = ()=>{
    const mongoose = require('mongoose');
    _connect(mongoose);

    //load models
    const User = require('./models/user');
}

var _connect = (mongoose)=> {
    mongoose.connect(`mongodb://${config.MONGODB.USERNAME}:${config.MONGODB.PASSWORD}@${config.MONGODB.HOST}:${config.MONGODB.PORT}/${config.MONGODB.DATABASE}`)
      .then(() => {
        console.log('Database connection successful')
      })
      .catch(err => {
        console.error('Database connection error: ' + JSON.stringify(err))
      })
 }

module.exports = {
    init: init
};