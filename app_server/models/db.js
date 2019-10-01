var mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

var mongoDb = "mongodb+srv://ocansiz:osman1212@cluster0-tsiwk.mongodb.net/MyDB?retryWrites=true&w=majority";

mongoose.connect(mongoDb, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(err));