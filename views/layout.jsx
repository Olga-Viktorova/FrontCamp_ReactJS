import React from 'react';
import Logout from './user/logout';

class Layout extends React.Component {
  render() {
	let userMessage;
	if (this.props.user){
		userMessage = (
			<div  className="login">
				<div> 
					 {this.props.user.username}
				</div>
				<div>
					<a href="/logout">Logout</a>
				</div>
			</div>
		)
	} else{
		userMessage = (
			<div className="login">
				<a href="../../login">Login </a>
			</div>)
	}
        
    return (
      <html>
        <head>
          <link rel="stylesheet" href="/stylesheets/page.css" />
		  		<link rel="stylesheet" href="/stylesheets/news.css" />
        </head>
        <body className="page">
					{userMessage}
					{this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = Layout;