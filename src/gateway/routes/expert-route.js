'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/user-controller');
const authService = require('../../core/services/auth-service');

router.get('/', authService.authorize, controller.get);
router.get('/:id', authService.authorize, controller.getById);
router.post('/', authService.authorize, controller.post);

module.exports = router;