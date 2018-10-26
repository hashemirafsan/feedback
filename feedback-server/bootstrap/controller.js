const fs = require('fs');
const { compactDir } = require('../helper/directory');
const contDir = "/../controllers/";
const controllers = {};

const serviceControllers = (routeDir) => {
    fs.readdirSync(compactDir(routeDir + contDir)).filter(file => {
        const [ fileName ] = file.split('.js');
        controllers[fileName] = require(compactDir(routeDir + contDir + `/${fileName}`));
    });

    return controllers;
}

module.exports = serviceControllers;