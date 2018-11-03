const moongse = require('mongoose');
const Schema = moongse.Schema;

const QuestionSchema = new Schema({
    type_id: {
        required: true,
        type: Schema.Types.ObjectId
    },
    title: {
        required: true,
        type: String
    },
    answer_type: {
        required: true,
        type: String
    },
    answer: {
        type: Schema.Types.Array
    }
});

module.exports = moongse.model('Questions', QuestionSchema);