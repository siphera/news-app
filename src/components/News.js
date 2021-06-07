import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import NewsArticle from "./NewsArticle";
import SimpleBackdrop from "./Backdrop"


function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div>
      {/* <h1 className="head-text">THE NEWS</h1> */}
      <div className="all-news">
        {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : <SimpleBackdrop />}
      </div>
    </div>
  );
}

export default News;
