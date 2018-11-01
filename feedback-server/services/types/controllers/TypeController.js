const BaseController = require('../../../framework/controller/BaseController');

class TypeController extends BaseController {
    constructor(req, res, next) {
        super(req, res)
    }

    /**
     * Removing Types
     */
    delete() {
        const { Types } = this.models;
        const { id } = this.req.body;
        Types.findByIdAndRemove({ id }, (err) => {
            if (err) {
                return this.response({
                    message: "Some problem in Type model when updating item",
                    line: 19
                }, 404);
            }

            return Types.find({})
            .then(res => this.response({
                message: "Successfully Removed!",
                types: res
            }))
            .catch(err => console.log("something big"))
        })
    }

    /**
     * Updating Types
     */
    update() {
        const { Types } = this.models;
        const { id, team_type, feedback_type } = this.req.body;
        Types.findOneAndUpdate({ _id: id }, { team_type, feedback_type }, (err, type) => {
            if (err) {
                return this.response({
                    message: "Some problem in Type model when updating item",
                    line: 19
                }, 404)
            }

            return this.response({
                message: "Successfully Updated Types",
                type
            })
        })
    }

    /**
     * Creating new types
     */
    save(req, res) {
        const { Types } = this.models;
        const saveTypes = new Types({
            team_type: this.req.body.team_type,
            feedback_type: this.req.body.feedback_type
        })

        saveTypes.save((err, type) => {
            if (err) {
               return this.response({
                    message: "Some problem in Type model when saving new item",
                    line: 23
                }, 404)
            }

            this.models.Types.find({})
            .then(res => this.response({
                message: "Successfully Created Types",
                types: res
            }))
            .catch(err => console.log("something big"))
        })
    }

    /**
     * Show All Types
     */
    index () {
        this.models.Types.find({})
        .then(res => this.response({
            types: res
        }))
        .catch(err => console.log("something big"))   
    }
}

module.exports = TypeController;