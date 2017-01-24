import React from 'react';
import Layout from './../layout';

class UpdateArticle extends React.Component {

  render() {
  	  return (
        <Layout user={this.props.user}>
        <link rel="stylesheet" href="../stylesheets/articleAdd.css"/>
            <div className="container">
               <form id="contact" action="save" method="post">
                    <h3>Update Acticle</h3>    
                    <fieldset>
                       <input placeholder="Title" type="hidden" tabindex="1" required="" autofocus="" name="id" value={this.props.article._id}/>
                    </fieldset>   
                    <fieldset>
                       <input placeholder="Title" type="text" tabindex="1" required="" autofocus="" name="title" value={this.props.article.title}/>
                    </fieldset>     
                    <fieldset>
                        <input placeholder="Author" type="text" tabindex="2" required="" name="author" value={this.props.article.author}/>
                    </fieldset>    
                    <fieldset>
                        <input placeholder="Image link" type="url" tabindex="3" required="" name="imagelink" value={this.props.article.imagelink}/>
                    </fieldset>    
                    <fieldset>
                        <input placeholder="Article Limk" type="url" tabindex="4" required="" name="acticlelink" value={this.props.article.acticlelink}/>
                    </fieldset>    
                    <fieldset>
                       <textarea placeholder="Description" tabindex="5" required="" name="description">{this.props.article.description}</textarea>
                    </fieldset>    
                    <fieldset>
                       <button id="contact-submit" name="submit" type="submit" data-submit="...Sending">Submit</button>
                    </fieldset>    
                </form>
            </div>
        </Layout>
    );
  }
}

module.exports = UpdateArticle;