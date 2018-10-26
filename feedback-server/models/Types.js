const moongse = require('mongoose');
const Schema = moongse.Schema;

const TypeSchema = new Schema({
    team_type: String,
    feedback_type: String
});

module.exports = moongse.model('Types', TypeSchema);