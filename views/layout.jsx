import React from 'react';
import Logout from './user/logout';

class Layout extends React.Component {
  render() {
	let userMessage;
	if (this.props.user){
		userMessage = (
			<div>
				<div className="login"> 
					{this.props.user.username}}
				</div>
				<Logout />
			</div>
		)
	} else{
		userMessage = (<div className="login">
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

Layout.propTypes = {
  user: React.PropTypes.object
};

module.exports = Layout;