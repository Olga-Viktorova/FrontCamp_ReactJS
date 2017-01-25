var React = require('react');
var Layout = require('./../layout');

var Login = React.createClass({
    render: function() {
        return (
            <Layout>
			<h4>Login to your account</h4>
				<link rel="stylesheet" href="../stylesheets/articleAdd.css"/>
				<div className="container">
					<form id="contact" action="./login" method="post">
					<h3>Login</h3>    
					<h4>Enter your credentials</h4>    
					<fieldset>
						<input placeholder="Email" type="email" tabindex="1" required="" autofocus="" name="email"/>
					</fieldset>    
					<fieldset>
						<input placeholder="Password" type="password" tabindex="2" required="" name="password"/>
					</fieldset>
					<fieldset>
						<button id="contact-submit" name="submit" type="submit" data-submit="...Entering">Enter</button>
					</fieldset> <a href="./register/">Registar</a>
					</form>
				</div>	
		</Layout>
        );
    }
});

module.exports = Login;