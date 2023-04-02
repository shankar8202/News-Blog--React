import React, { useState, useEffect } from "react";
import axios from "axios";

function NewsApp() {
  const [articles, setArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY"
      );
      setArticles(result.data.articles);
    };
    fetchData();
  }, []);

  const handleSaveArticle = (article) => {
    const savedArticles = JSON.parse(localStorage.getItem("savedArticles")) || [];
    savedArticles.push(article);
    localStorage.setItem("savedArticles", JSON.stringify(savedArticles));
    setSavedArticles(savedArticles);
  };

  const handleRemoveArticle = (index) => {
    const savedArticles = JSON.parse(localStorage.getItem("savedArticles")) || [];
    savedArticles.splice(index, 1);
    localStorage.setItem("savedArticles", JSON.stringify(savedArticles));
    setSavedArticles(savedArticles);
  };

  return (
    <div>
      <h1>Top Headlines</h1>
      {articles.map((article) => (
        <div key={article.title}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <button onClick={() => handleSaveArticle(article)}>Read Later</button>
        </div>
      ))}
      <h1>Saved Articles</h1>
      {savedArticles.map((article, index) => (
        <div key={article.title}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <button onClick={() => handleRemoveArticle(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default NewsApp;
