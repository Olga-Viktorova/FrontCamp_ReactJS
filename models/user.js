var mongoose = require('../mongooseConf');

var userSchema = new mongoose.Schema({ 
	name: String,
	email: String,
	password: String
});

var UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;


/*var someAuthor = new UserModel ({name: "Pavel"});

someAuthor.save(function(error){ 
	if(error){
		console.log(error); 
		} else{ 
			console.log(someAuthor); 
			}
		}); 
		*/