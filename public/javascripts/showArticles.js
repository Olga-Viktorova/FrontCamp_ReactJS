var View = require('./renderNews');

var mongoose = require('../mongooseConf');

	//import View from 'renderNews';
//import coll from 'getArticles';



let button = document.getElementById('shownewsbutton');

button.onclick =function(){
	var css = require('../stylesheets/news.less');
	let data = db.articles.find();

	View.showPage(data);

};


