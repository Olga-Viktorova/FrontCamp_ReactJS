var express = require('express');
var router = express.Router();
var ArticleModel = require('../models/article');

var bodyParser = require('body-parser')
 
var app = express()
 
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())


/* GET home page. */
router.get('/', function(req, res, next) {
	ArticleModel.find({}, function(err, articles) {
 		res.render('articles', { articles: articles });
 	});
});


router.get('/add', function(req, res, next) {
  res.render('article', {article: new ArticleModel()});
});

router.post('/save', function (req, res) {
if (req.body.id){
	ArticleModel.update({ _id: req.body.id },
	 { $set: { 
	 	author: req.body.author,
		title: req.body.title,
		description: req.body.description,
		imagelink: req.body.imagelink,
		acticlelink: req.body.acticlelink,
		tags: req.body.tags,
  		update_at: Date.now() 
  	}},  function(err, doc){
    		if (err) return res.send(500, { error: err });
  	 			res.render('statusArticle', {status: 'Article was updated successfully !'});
  	 		});
}else{
	var articleModel = new ArticleModel ({
	author: req.body.author,
	title: req.body.title,
	description: req.body.description,
	imagelink: req.body.imagelink,
	acticlelink: req.body.acticlelink,
  	tags: req.body.tags,
  	created_at: Date.now(),
})
	articleModel.save(function(error){ 
		if(error){
			res.send(error); 
		} else{ 
			res.render('statusArticle', {status: 'Article was added successfully !'});
		}
	}); 
}

});

router.get('/update', function(req, res, next) {
	ArticleModel.findOne({ _id: req.query.id}, function (err, doc){
		res.render('articleUpdate', { article: doc });
	});	
});

router.get('/delete', function(req, res, next) {
  ArticleModel.findByIdAndRemove(req.query.id, function (err, todo) {  
  if (err) return res.send(500, { error: err });
  	 res.render('statusArticle', {status: 'Article: ' + req.query.id + 'was updated successfully !'});
  	 		});
});

module.exports = router;