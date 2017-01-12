var express = require('express');
var router = express.Router();
var user = require('../models/user')



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

//router.get('/article/add', function(req, res, next) {
  //res.render('article');
//});


//router.get('/', function (req, res) {
//	res.send('Helloddfdcfddsdsfdccccc World!')
//})

module.exports = router;
