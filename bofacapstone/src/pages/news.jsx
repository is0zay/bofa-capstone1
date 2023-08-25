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

function scrolltToSection(sectionId) {
  const element=document.getElementById(sectionId);
  if(element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

  return (
    <div>
      <div id="latest" onClick={() => scrolltToSection("latest")}>
        <h1>Latest</h1>
        <section className="latest_news">
          {/* <img
          src="https://newsroom.bankofamerica.com/content/dam/newsroom/images/banners/OFC002_jpg.jpg/_jcr_content/renditions/original"
          alt="latest news cover"
        /> */}
          <h2>
            BofA Surpasses $500 Million in Equity Investments to Support
            Minority and Women Entrepreneurs
          </h2>
          <h3>
            NEW YORK, NY – Bank of America today announced that it has committed
            more than $500 million in equity investments to minority- and
            women-led funds, more than doubling its initial $200 million
            commitment.
          </h3>
          <h3>
            <a href="https://newsroom.bankofamerica.com/content/newsroom/press-releases/2023/06/bofa-surpasses--500-million-in-equity-investments-to-support-min.html">
              READ FULL ARTICLE..
            </a>
          </h3>
          <h3>6/15/2023</h3>
        </section>
      </div>
      <div id="archives" onClick={() => scrolltToSection("archives")}>
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
    </div>
  );
};

export default NewsArticles;
