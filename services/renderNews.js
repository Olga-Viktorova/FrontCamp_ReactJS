//import LikeDecorator from '../Decorator/LikeDecorator';
//export default
 class View{
	
	showPage(listNews) {
		let divNews = document.createElement('div');
		divNews.setAttribute("class", "body");

		let newsLogo = require('../../pics/bbc_news_logo.png');
		let imgLogo =document.createElement('img');
		imgLogo.src = newsLogo;
		imgLogo.setAttribute("class", "logo")

		let header = document.createElement('div')
		header.setAttribute("class", "header");
		header.appendChild(imgLogo);

		divNews.appendChild(header);

		document.body.appendChild(divNews);
		var divlistNews = document.createElement('div');
		divNews.appendChild(divlistNews)

		    for (let value of listNews) {

		    	var rowNews = this.showNews(value, divlistNews);       
//		        var likeDecorator = new LikeDecorator(value);
//		        likeDecorator.createNews(value);
//		        likeDecorator.showNews(rowNews);   

		    }  
	}

	showNews(news, ul){
		var div = document.createElement('div');
    	div.setAttribute("class", "row"); 
   	 	ul.appendChild(div);
             var li = document.createElement('div');
             div.appendChild(li);
             
              var img = document.createElement('img');
                 img.setAttribute("src", news.urlToImage);
                 img.setAttribute("class", "img");
                 li.appendChild(img);

             var strong = document.createElement('strong');
             li.appendChild(strong);

                 var a = document.createElement('a');
                 a.setAttribute("href", news.urlToImage);
                 a.setAttribute("class", "link");
                 a.innerHTML  = news.description;
                 strong.appendChild(a);
                
                
                 var p = document.createElement('p');
                 li.appendChild(p);
                 var node = document.createTextNode(news.title);
                 p.appendChild(node);

                 var publishedAt = document.createElement('div')
                 publishedAt.innerHTML = "Publish at: " + news.publishedAt;
                 li.appendChild(publishedAt);

                 var publishedAt = document.createElement('div')
                 publishedAt.innerHTML = "By: " + news.author;
                 li.appendChild(publishedAt); 

            return div;      
        }  
}

module.exports = View;