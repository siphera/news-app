import React from "react";

function NewsArticle({ data }) {
  return (
    <div className="news">
      <h1 className="news-title">{data.title}</h1>
      <img className="news-image" src={data.urlToImage} alt=""/>
      <p className="news-desc">{data.description}</p>
      <span className="news-author">{data.author}</span> <br />
      <span className="news-published">{data.publishedAt}</span>
      <span className="news-source">{data.source.name}</span>
    </div>
  );
}

export default NewsArticle;
