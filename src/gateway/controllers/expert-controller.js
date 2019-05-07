'use strict'

const expertService = require('../../core/services/expert-service');
const validationContract = require('../validators/validator.js');
const authService = require('../../core/services/auth-service');
const md5 = require('md5');

/**
 * @api {get} /expert Request Users information
 * @apiName GetExperts
 * @apiGroup Expert
 *
 * @apiSuccess {String} name Full name of the expert
 * @apiSuccess {String} email  Email address of the expert.
 * @apiSuccess {String} bio Biograph  of the expert
 * @apiSuccess {Datetime} created  Date expert was created.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *          {
 *              "name": "Ammanuel Gessese",
 *              "email": "ammanyer@gmail.com",
 *              "bio": "",
 *              "created": "2019-01-01 11:00:00",
 *          }
 *     ]
 *
 */
exports.get = async(req, res, next) => {
    try {
        let data = await expertService.get();
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send({message: 'Sorry, we can not retrieve user info.'});
    }
}

/**
 * @api {get} /expert/:id Request a specific User information
 * @apiName GetExpert
 * @apiGroup Expert
 *
 * @apiParam {Number} id Experts unique ID.
 *
 * @apiSuccess {String} name Full name of the expert
 * @apiSuccess {String} email  Email address of the expert.
 * @apiSuccess {String} bio Biograph  of the expert
 * @apiSuccess {Datetime} created  Date expert was created.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "name": "Ammanuel Gessese",
 *           "email": "ammanyer@gmail.com",
 *           "bio": "",
 *           "created": "2019-01-01 11:00:00",
 *     }
 *
 */
exports.getById = async(req, res, next) => {
    try {
        let data = await expertService.getById(req.params.id);
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send({message: 'Falha ao processar sua requisição'});
    }
}

/**
 * @api {post} /user/ Create a new User
 * @apiName CreateUser
 * @apiGroup User
 *
 * @apiParam {String} name Expert fullname.
 * @apiParam {String} email Expert email address.
 * @apiParam {String} bio Expert biograph.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Expert created"
 *     }
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *        "errors": {}
 *     }
 */
exports.post = async(req, res, next) => {
    try {
        let contract = new validationContract();
        contract.hasMinLen(req.body.name, 3, 'The name has to be at least 3 characters');
        contract.isEmail(req.body.email, 'Invalid email');
        contract.hasMinLen(req.body.password, 6, 'The password has to be at least 3 characters');

        if(!contract.isValid()) {
            res.status(400).send(contract.errors()).end();
            return;
        }

        await expertService.create({
            name: req.body.name,
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY),
            roles: ["user"]
        });

        res.status(200).send({message: 'User created'});
    } catch(e) {
        res.status(500).send({error: e});
    }
}