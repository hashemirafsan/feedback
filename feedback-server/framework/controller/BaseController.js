const jwt = require('jsonwebtoken');
const { secret_key } = require('../../config/settings');
class Controller {
    constructor(req, res) {
        this.req = req;
        this.res = res;
        this.models = require('../../bootstrap/models');
    }

    verifyAuth() {
        if ('authorization' in this.req.headers) {
            const [ pre, token ] = this.req.headers['authorization'].split(' ');
            jwt.verify(token, secret_key, function(err, decode) {
                if (err) {
                    return this.response({
                        auth: false,
                        message: 'Failed to authenticate token'
                    })
                }
            })
        } else {
            return this.response({
                auth: false,
                message: "Token is not provided"
            })
        }
    }

    response(data, code=200) {
        this.res.statusCode = code;
        if (this.req.user) {
            const { _id } = this.req.user;
            this.res.json({
                status: code > 400 ? false : true,
                statusCode: code,
                session_id: _id,
                ...data
            })
            return
        }

        this.res.json({
            status: code > 400 ? false : true,
            statusCode: code,
            ...data
        })
    } 
}

module.exports = Controller;