import React from 'react';
import Layout from './../layout';

class ArticleList extends React.Component {

  render() {
  	let articleList = this.props.articles.map((call) => {
		return 	<div className="article">
							<img src={call.imagelink} className="img"/>
							<a href={call.acticlelink} className="link">{call.title}</a>
							<h4>{call.description}</h4>
							<h4>By: {call.author}</h4>
							<div className="inline"> 
								<form action="articles/update" method="get">
									<input name="id" value={call._id} type="hidden"/>
									<button className="button" id="updateArticleButton" type="submit">Update</button>
								</form>
							</div>	
							<div className="inline"> 
								<form action="articles/delete" method="get">
									<input name="id" value={call._id} type="hidden"/>
									<button className="button" id="updateArticleButton" type="submit">Delete</button>
								</form>
							</div>								
					</div>
    });

  return (
  <Layout user={this.props.user}>
		<div className="header">
			<div>
				<form action="articles/add" method="get">
  				<button className="button" id="addArticleButton" type="submit">Add article</button>
				</form>
			</div>
			<img className="logo" src="images/bbc_news_logo.png"/>
			</div>
        <div className="acticles">
          {articleList}
        </div>
	</Layout>
    );
  }
}

module.exports = ArticleList;	