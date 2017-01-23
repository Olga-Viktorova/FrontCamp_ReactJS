import React from 'react';
import Layout from './layout';

class Index extends React.Component {

  render() {
    return (
	<Layout>
		<div className="align-center">  
		<form action="articles" method="get">
			<button className="button" id="shownArticleButton" type="submit">Show articles</button>
		</form>
		</div>
		<div className="align-center">
			<form action="articles/add" method="get">
				<button className="button" id="addArticleButton" type="submit">Add article</button>
			</form>
		</div>    
	</Layout>
    );
  }
}

module.exports = Index;