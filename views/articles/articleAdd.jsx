import React from 'react';
import Layout from './../layout';

class AddArticle extends React.Component {

  render() {
  	  return (
        <Layout user={this.props.user}>
        <link rel="stylesheet" href="../stylesheets/articleAdd.css"/>
            <div className="container">
               <form id="contact" action="save" method="post">
                    <h3>Add Acticle</h3>    
                    <h4>Contact us for custom quote</h4>    
                    <fieldset>
                       <input placeholder="Title" type="text" tabindex="1" required="" autofocus="" name="title"/>
                    </fieldset>    
                    <fieldset>
                        <input placeholder="Author" type="text" tabindex="2" required="" name="author"/>
                    </fieldset>    
                    <fieldset>
                        <input placeholder="Image link" type="url" tabindex="3" required="" name="imagelink"/>
                    </fieldset>    
                    <fieldset>
                        <input placeholder="Article Limk" type="url" tabindex="4" required="" name="acticlelink"/>
                    </fieldset>    
                    <fieldset>
                       <textarea placeholder="Description" tabindex="5" required="" name="description"></textarea>
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

module.exports = AddArticle;