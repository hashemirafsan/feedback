const express = require('express');
const cors = require('cors');
const mongoose = require('../database/database');
const bodyParser = require('body-parser');
const routes = require('./routes');
const passport = require('passport');
const logger = require('morgan');
const auth = require('../services/auth/routes/api');
const app = express();
const PORT = process.env.PORT || 5000;
mongoose.connection.once("open", () => {
    return null;
});

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/auth',auth);
app.use('/api/v1', passport.authenticate('jwt', {session: false}) , routes);
// app.set("trust proxy", 1)
app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`)
})

module.exports = app;