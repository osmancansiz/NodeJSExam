var express = require('express');
var router = express.Router();

var loginController = require('../controller/loginController');

router.get('/', loginController.loginGet);
router.post('/', loginController.loginPost);
router.get('/signup', loginController.signUpGet);
router.post('/signup', loginController.signUpPost);
router.get('/userList', loginController.userList);
router.get('/userDelete/:kullaniciadi', loginController.userDelete);

module.exports = router;