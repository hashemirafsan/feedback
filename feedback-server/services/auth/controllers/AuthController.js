const BaseController = require('../../../framework/controller/BaseController');
const passport = require('passport');
const jwt = require('jsonwebtoken');
var passportConfig = require('../../../config/passport');
passportConfig(passport);
const { secret_key } = require('../../../config/settings');

class AuthController extends BaseController {
    constructor(req, res, next) {
        super(req, res);
    }

    registration() {
        const { first_name, last_name, email, password } = this.req.body;
        const { Users } = this.models;
        if (!first_name || !email || !password) {
            this.response({
                message: "Name, Email & password is required!"
            }, 401)
        } else {
            let user = new Users({
                first_name,
                last_name,
                email,
                password
            });

            user.save((err) => {
                if (err) {
                    return this.response({
                        message: "Email already Exists"
                    })
                }
                this.response({
                    message: "Registration Successfully Completed"
                })
            })
        }
    }

    login() {
        const { Users } = this.models;
        const redirect = {
            admin: '/admin',
            user: '/'
        };
        Users.findOne(
            { email: this.req.body.username },
            (err, user) => {
                if (err) throw err;

                if (! user) {
                    this.response({
                        status: false,
                        msg: 'Authentication Failed, User Not Found!'
                    }, 401)
                } else {
                    user.comparePassword(this.req.body.password, (err, isMatch) => {
                        if (isMatch && !err) {
                            const token = jwt.sign(user.toJSON(), secret_key, { expiresIn: '1h' });
                            this.response({
                                status: true,
                                redirect: redirect[user.type],
                                token: `JWT ${token}`
                            })
                        } else {
                            this.response({
                                status: false,
                                msg: 'Authentication Failed, Wrong password'
                            })
                        }
                    })
                }
            } 
        )
    }
}

module.exports = AuthController;