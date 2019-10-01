//var http = require('http');
var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./app_server/models/db');
var ejsLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/app_server/views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(ejsLayouts);
//Klasör Haritalama Yapmak için public path'ini tanımlıyoruz.
app.use('/public', express.static(path.join(__dirname, 'public')));

//Yönlendirici sınıfı tarafından yönlendirmeler yapılıyor.
require('./app_server/routes/routeManager')(app);


var Kullanici = require('./app_server/models/kullanici');

var yeniKullanici = new Kullanici({
    ad: 'Ahmet',
    soyad: 'Mehmet',
    email: 'ahmetmehmet@gmail.com',
    kullaniciAdi: 'ahmetmehmet',
    sifre: '123456'
});


app.listen(8000);