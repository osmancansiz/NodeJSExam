var kullanici = require('../models/kullanici');

module.exports.loginGet = function(req, res) {
    res.render('login');
}

module.exports.loginPost = function(req, res) {
    console.log(req.body);
    res.render('login', {
        kullaniciadi: req.body.username,
        password: req.body.password
    });
}

module.exports.signUpGet = function(req, res) {
    res.render('signup');
}

module.exports.signUpPost = function(req, res) {

    var yeniKullanici = new kullanici({
        ad: req.body.ad,
        soyad: req.body.soyad,
        email: req.body.email,
        kullaniciadi: req.body.kullaniciadi,
        password: req.body.password
    });

    yeniKullanici.save(function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Kullanıcı Kaydedildi.');
            res.redirect('userList');
        }
    });

}

module.exports.userList = function(req, res) {
    kullanici.find(function(err, results) {
        res.render('userList', { kullanicilar: results });
    });
}

module.exports.userDelete = function(req, res) {
    kullanici.findOneAndRemove({ kullaniciadi: req.params.kullaniciadi }, function(err, results) {
        if (err) {
            console.log('Kullanıcı Silinemedi.');
        } else {
            res.redirect('/login/userList');
        }
    });
}