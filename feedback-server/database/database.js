const mongoose = require('mongoose');
const { mongodb } = require('../config/database');

mongoose.connect(`mongodb://${mongodb.user}:${mongodb.password}@${mongodb.host}/${mongodb.database}`);

module.exports = mongoose;