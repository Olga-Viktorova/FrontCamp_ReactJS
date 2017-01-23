import React,  Component  from 'react';
import 'public/stylesheets/news.css';

class App extends Component {
  render() {
    return (
       <div className="articles">
          <div className="article">
            <img src="http://ichef.bbci.co.uk/news/1024/cpsprodpb/0143/production/_93732300_hi037423786.jpg" className="img">
            <a href="http://www.bbc.co.uk/news/uk-politics-38710697" className="link">Theresa May to challenge Donald Trump</a>
            <h4>Test</h4>
            <h4>Publish at: Sun Jan 22 2017 18:32:37 GMT+0300 (Belarus Standard Time)</h4>
            <h4>By: BBS News</h4>
        </div>
      </div>
    );
  }
}

export default App;
