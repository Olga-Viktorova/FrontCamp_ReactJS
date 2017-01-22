var express 				= require('express');
var router 					= express.Router();
var user 					= require('../models/user')

var requireTree 			= require('require-tree');
var controllers 			= requireTree('../controllers');
var mustAuthenticatedMw 	= require('../middlewares/must-authenticated');  

router.get('/', function(req, res, next) {
	res.render('index');
});

  // Basic routes
router.get('/login', 	       controllers.render('user/login'));
router.get('/register', 	   controllers.render('user/register'));
router.get('/fail',            controllers.render('fail'));

router.post('/login', 		   controllers.users.login);
router.post('/register', 	   controllers.users.register);
router.get('/logout', 		   controllers.users.logout);

module.exports = router;
