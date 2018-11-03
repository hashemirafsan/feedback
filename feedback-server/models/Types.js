const moongse = require('mongoose');
const Schema = moongse.Schema;

const TypeSchema = new Schema({
    team_type: String,
    feedback_type: String,
    questions: [{
        type: Schema.Types.ObjectId,
        ref: 'Questions'
    }]
});

TypeSchema.set('autoIndex', true)

module.exports = moongse.model('Types', TypeSchema);