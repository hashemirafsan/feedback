const express = require('express');
const router = express.Router();
const { TypeController } = require('../../../bootstrap/controller')(__dirname);
const rPrix = "/types"

router.get(`${rPrix}/`, (req, res, next) => new TypeController(req, res, next).index());
router.post(`${rPrix}/create`, (req, res, next) => new TypeController(req, res, next).save());
router.post(`${rPrix}/update`, (req, res, next) => new TypeController(req, res, next).update());
router.post(`${rPrix}/delete`, (req, res, next) => new TypeController(req, res, next).delete());

module.exports = router;