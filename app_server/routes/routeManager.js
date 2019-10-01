var loginRoute = require('./loginRoute');
var homeRoute = require('./homeRouter');

module.exports = function(app) {
    app.use('/', homeRoute);
    app.use('/login', loginRoute);
}