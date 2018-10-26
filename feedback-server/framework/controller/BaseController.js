class Controller {
    constructor(req, res) {
        this.req = req;
        this.res = res;
        this.models = require('../../bootstrap/models');
    }

    response(data, code=200) {
        this.res.statusCode = code;
        this.res.json({
            type: code > 400 ? "error" : "success",
            code,
            ...data
        });
    } 
}

module.exports = Controller;