const express = require('express');
const router = express.Router();
const { AuthController } = require('../../../bootstrap/controller')(__dirname);

router.post('/register', (req, res, next) => new AuthController(req, res, next).registration());
router.post('/login', (req, res, next) => new AuthController(req, res, next).login());

module.exports = router;