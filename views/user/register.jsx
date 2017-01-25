import React from 'react';
import Layout from './../layout';

class Register extends React.Component {
	render() {
    return (
	<Layout>
		<h4>Registar</h4>
        <link rel="stylesheet" href="../stylesheets/articleAdd.css"/>
        <div className="container">
            <form id="contact" action="./" method="post">
                <h3>Register</h3>    
                <h4>Enter your credentials</h4>    
                <fieldset>
                    <input placeholder="Email" type="email" tabindex="1" required="" autofocus="" name="email"/>
                </fieldset>    
                <fieldset>
                    <input placeholder="Password" type="password" tabindex="2" required="" name="password"/>
                </fieldset>
                <fieldset>
                    <button id="contact-submit" name="submit" type="submit" data-submit="...Entering">Create account</button>
                </fieldset> 
            </form>
        </div>
	</Layout>
    );
  }
}

module.exports = Register;