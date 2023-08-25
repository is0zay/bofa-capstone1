import React, { useEffect, useState } from "react";
import "./newsletter.css"

const NewsArticles = () => {
  const [NewsArticles, SetNewsArticles] = useState([]); // Set initial state to an empty array

  useEffect(() => {
    fetch("http://localhost:5000/newsarticles")
      .then((response) => response.json())
      .then((data) => SetNewsArticles(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <h1>Archives</h1>
      <div className="news_articles">
        {NewsArticles.map((article) => (
          <div key={article.id} className="news_card">
            <img src={article.news_image} alt={article.news_title} />
            <h3>
              <a href={article.news_link}>{article.news_title}</a>
            </h3>
            <h4>{new Date(article.publish_date).toLocaleDateString()}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsArticles;
