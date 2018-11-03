const express = require('express');
const router = express.Router();
const { QuestionController } = require('../../../bootstrap/controller')(__dirname);
const rPrix = "/questions";

router.get(`${rPrix}/`, (req, res, next) => new QuestionController(req, res, next).index());

module.exports = router;