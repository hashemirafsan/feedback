const fs = require('fs');
const { compactDir } = require('../helper/directory');
const DIR = '/../services';
const services = [];
const noInc = ['auth'];

fs.readdirSync(compactDir(__dirname + DIR)).map(path => {
    if (! noInc.includes(path)) {
        return services.push(require(compactDir(__dirname + `${DIR}/${path}/routes/api`)))
    }
});

module.exports = services;