const BaseController = require('../../../framework/controller/BaseController');

class QuestionController extends BaseController {
    constructor(req, res, next) {
        super(req, res);
    }

    index() {
        this.models.Questions.find({ type_id: this.req.body.type_id })
        .then((res) => {
            this.response({
                questions: res
            })
        })
        .catch((err) => console.log(err));
    }

}

module.exports = QuestionController;