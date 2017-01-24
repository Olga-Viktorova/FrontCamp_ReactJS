//import  renderToString  from 'react-dom/server';

var express 				= require('express');
var router 					= express.Router();
var user 						= require('../models/user')
var ArticleModel 		= require('../models/article');
var React 					= require('react');
var ReactDomServer 	= require('react-dom/server'); 
var App 						= require('./../views/log.jsx');
var template  						= require('./../views/template.jsx');

//import { renderToString } from 'react-dom/server';

//var requireTree 			= require('require-tree');
//var controllers 			= requireTree('../controllers');
var mustAuthenticatedMw 	= require('../middlewares/must-authenticated');  

router.get('/', function(req, res, next) {
	res.render('index');
});

router.get('/login', function(req, res, next) {
	// var html = ReactDomServer.renderToString(
	// 	React.createElement(log)
	// )
	// res.send(html);

 // res.render('user/login');

  const isMobile = true;
  const initialState = { isMobile };
  const appString =ReactDomServer.renderToString(<App {...initialState} />);

  res.send(template({
    body: appString,
    title: 'Hello World from the server',
    initialState: JSON.stringify(initialState)
  }));
});

router.get('/register', function(req, res, next) {
  res.render('user/register');
});

router.get('/fail', function(req, res, next) {
  res.render('fail');
});

router.post('/login', function(req, res, next) {
	var login = require('../controllers/users/login');
    login(req, res, next);
});

router.post('/register',  function(req, res, next) {
	var register = require('../controllers/users/register');
	register(req, res, next);
});

router.get('/logout', function(req, res) {
	var logout = require('../controllers/users/logout');
	logout(req, res);
});


  // Basic routes
/*router.get('/login', 	       controllers.render('user/login'));
router.get('/register', 	   controllers.render('user/register'));
router.get('/fail',            controllers.render('fail'));

router.post('/login', 		   controllers.users.login);
router.post('/register', 	   controllers.users.register);
router.get('/logout', 		   controllers.users.logout);*
*/

module.exports = router;
// exports.index = function(req, res){
	// ArticleModel.find({}, function(err, articles) {
 	// res.render('index', { articles: articles, user: req.user, title: 'test' });
	 // });
// };