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
  res.render('test');
});

router.get('/getall', function (req, res) {
	//res.render('test');

	//let acticleList = db.test.find();
	//var t = ArticleModel.find();
	//var showArticles = require('../services/showArticles');
	//res.send(t);
	var View = require('./renderNews');
	ArticleModel.find({}, function(err, articles) {

	//var test = View.showPage(articles);
	articles.forEach(function(news) {
      var div = document.createElement('div');
    	div.setAttribute("class", "row"); 
   	 	ul.appendChild(div);
             var li = document.createElement('div');
             div.appendChild(li);
             
              var img = document.createElement('img');
                 img.setAttribute("src", news.urlToImage);
                 img.setAttribute("class", "img");
                 li.appendChild(img);

             var strong = document.createElement('strong');
             li.appendChild(strong);

                 var a = document.createElement('a');
                 a.setAttribute("href", news.urlToImage);
                 a.setAttribute("class", "link");
                 a.innerHTML  = news.description;
                 strong.appendChild(a);
                
                
                 var p = document.createElement('p');
                 li.appendChild(p);
                 var node = document.createTextNode(news.title);
                 p.appendChild(node);

                 var publishedAt = document.createElement('div')
                 publishedAt.innerHTML = "Publish at: " + news.publishedAt;
                 li.appendChild(publishedAt);

                 var publishedAt = document.createElement('div')
                 publishedAt.innerHTML = "By: " + news.author;
                 li.appendChild(publishedAt); 

      res.send(div);
    });

    //res.render('article', { articleList: articles });  
    
});




});	

router.get('/add', function(req, res, next) {
  res.render('article');
  //console.log(req.body.author);

});

router.post('/save', function (req, res) {

var articleModel = new ArticleModel ({
	author: req.body.author,
	title: req.body.title,
	description: req.body.description,
  	tags: req.body.tags,
  	created_at: Date.now(),
})

articleModel.save(function(error){ 
	if(error){
		res.send(error); 
		} else{ 
			res.send('Article was added successfully ');
			}
		}); 

});


router.get('/update', function(req, res, next) {
  res.render('article', { title: 'titke' });
});

router.get('/delete', function(req, res, next) {
  res.render('article', { title: 'titke' });
});

module.exports = router;