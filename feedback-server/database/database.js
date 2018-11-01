const mongoose = require('mongoose');
const { process, type, database } = require('../config/database');

if ( process === "prod" && type === "mongodb") {
    const { mongodb_prod } = database;
    mongoose.connect(`mongodb://${mongodb_prod.user}:${mongodb_prod.password}@${mongodb_prod.host}/${mongodb_prod.database}`);
}

if ( process === "dev" && type === "mongodb") {
    const { mongodb_dev } = database;
    mongoose.connect(`mongodb://${mongodb_dev.host}/${mongodb_dev.database}`);
}

module.exports = mongoose;