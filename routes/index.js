var express = require('express');
var router = express.Router();
var user = require('../models/user')

var requireTree = require('require-tree');
var controllers = requireTree('../controllers');
var mustAuthenticatedMw = require('../middlewares/must-authenticated');  


router.all('/',              mustAuthenticatedMw);
router.all('/articles/*',    mustAuthenticatedMw);

router.get('/', function(req, res, next) {
	res.render('index');
});

  // Basic routes
  //router.get('/', 	   		   controllers.render('index'));
router.get('/login', 	       controllers.render('parts/login'));
router.get('/register', 	   controllers.render('parts/register'));
router.get('/private',         controllers.render('private'));
router.get('/fail',            controllers.render('fail'));


router.post('/login', 		   controllers.users.login);
router.post('/register', 	   controllers.users.register);
router.get('/logout', 		   controllers.users.logout);

/* GET home page. */




//router.get('/article/add', function(req, res, next) {
  //res.render('article');
//});


//router.get('/', function (req, res) {
//	res.send('Helloddfdcfddsdsfdccccc World!')
//})

module.exports = router;
