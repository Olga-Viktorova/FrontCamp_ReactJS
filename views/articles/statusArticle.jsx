import React from 'react';
import Layout from './../layout';

class StatusArticle extends React.Component {
  render() {
  	  return (
        <Layout user={this.props.user}>
            <link rel="stylesheet" href="../stylesheets/articleAdd.css"/>
            <div className="align-center">  
               {this.props.status}  
               <form action="/articles" method="get">
                   <button className="button" id="shownewsbutton" type="submit">Show news!</button>
               </form>
            </div>
        </Layout>
    );
  }
}

module.exports = StatusArticle;