var express = require('express');
var router = express.Router();

var loginController = require('../controller/loginController');

router.get('/', loginController.loginGet);
router.post('/', loginController.loginPost);
router.get('/signup', loginController.signUpGet);
router.post('/signup', loginController.signUpPost);

module.exports = router;