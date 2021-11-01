'use strict';
/**
 * This is the core of the EXPERT business domain which means, this should have all the logic that is related to the Expert.
 * And also it should not depends on any framework or cloud platform.
 */

const connector = require('../connector/providerManager');

var getExpert = async() => {
    //TODO: Validation and some domain logic here.
    await connector.getExpert();
}

var getExpertById = async(id) => {
    //TODO: Validation and some domain logic here.
    await connector.getExpertById(id);
}

var createExpert = async(data) => {
    //TODO: Validation and some domain logic here.
    await connector.createExpert(data);
}

module.exports = {
    getExpert: getExpert,
    getExpertById: getExpertById,
    create: createExpert
};