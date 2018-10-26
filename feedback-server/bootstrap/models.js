const fs = require('fs');
const { compactDir } = require('../helper/directory');
const DIR = "/../models";
const models = {};

fs.readdirSync(compactDir(__dirname + DIR)).filter(file => {
    const [ fileName ] = file.split('.js');
    models[fileName] = require(compactDir(__dirname + DIR + `/${fileName}`));
});

module.exports = models;
