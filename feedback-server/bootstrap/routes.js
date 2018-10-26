const fs = require('fs');
const { compactDir } = require('../helper/directory');
const DIR = '/../services';
const services = [];
fs.readdirSync(compactDir(__dirname + DIR)).filter(path => services.push(require(compactDir(__dirname + `${DIR}/${path}/routes/api`))));

module.exports = services;