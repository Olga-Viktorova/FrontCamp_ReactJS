var mongoose = require('../mongooseConf');

// create a schema
var articleSchema = new mongoose.Schema({
	author: String,
	title: String,
	description: String,
	tags: [String],
	comments: [String],
	created_at: Date,
	updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var ArticleModel = mongoose.model('Article', articleSchema);

// make this available to our users in our Node applications
module.exports  = ArticleModel;


/*var someArticle = new ArticleModel ({
	author: 'BBC News',
	title: 'Theresa May: UK cannot keep bits of EU membership',
	description: 'The UK cannot expect to hold on to \"bits\" of its membership after leaving the EU, Theresa May says.',
  	tags: ['Uk', 'BBS', 'News'],
  	created_at: Date.now(),
});

someArticle.save(function(error){ 
	if(error){
		console.log(error); 
		} else{ 
			console.log(someArticle); 
			}
		}); 
		*/
