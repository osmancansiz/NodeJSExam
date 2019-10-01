var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

var Schema = mongoose.Schema;

var kullaniciSchema = new Schema({
    ad: String,
    soyad: String,
    email: String,
    kullaniciadi: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, { collection: 'kullanicilar', versionKey: false });

var Kullanici = mongoose.model('Kullanici', kullaniciSchema);

module.exports = Kullanici;